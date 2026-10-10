const { createInterface } = require('node:readline/promises');
const { spawn } = require('node:child_process');
const { networkInterfaces } = require('node:os');

function getArgs(choice) {
  if (!['1', '2', '3', '4'].includes(choice)) return null;
  if (['3', '4'].includes(choice)) return ['start', '--offline', '--web'];
  return ['start', '--offline', '--go', ...(choice === '2' ? ['--android'] : [])];
}

async function main() {
  const extraArgs = process.argv.slice(2);
  const target = extraArgs[0];
  let choice = target === 'ios' ? '3' : target === 'web' ? '4' : null;
  if (choice) extraArgs.shift();
  if (!choice) {
    console.log('\nОбери пристрій:\n1 — Android: телефон\n2 — Android: емулятор / USB\n3 — iPhone: Safari\n4 — Браузер на комп’ютері');
    const prompt = createInterface({ input: process.stdin, output: process.stdout });
    while (!getArgs(choice)) {
      choice = (await prompt.question('Введи 1–4 (Enter — iPhone): ')).trim() || '3';
      if (!getArgs(choice)) console.log('Оберіть число від 1 до 4.');
    }
    prompt.close();
  }
  const args = getArgs(choice);
  const isWeb = ['3', '4'].includes(choice);
  if (isWeb) {
    const portIndex = extraArgs.indexOf('--port');
    const port = portIndex === -1 ? '8081' : extraArgs[portIndex + 1];
    if (portIndex === -1) args.push('--port', port);
    console.log(`\nКомп’ютер: http://localhost:${port}\nНа iPhone відкрий посилання у Safari після запуску сервера.\nТелефон і комп’ютер мають бути в одній Wi-Fi мережі.`);
    for (const address of Object.values(networkInterfaces()).flat()) {
      if (address && address.family === 'IPv4' && !address.internal) console.log(`Safari: http://${address.address}:${port}`);
    }
  } else {
    console.log('\nВхід у Expo для локального запуску на Android не потрібен.');
  }
  if (['1', '2'].includes(choice)) console.log('Для телефону: підключи його до тієї самої Wi-Fi мережі й відкрий QR-код в Expo Go.\nУ меню Expo натисни ? для всіх команд, a — для Android.\n');
  const child = spawn(process.execPath, [require.resolve('expo/bin/cli'), ...args, ...extraArgs], {
    stdio: isWeb ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });
  if (isWeb) {
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.on('SIGINT', () => child.kill());
    process.on('SIGTERM', () => child.kill());
  }
  child.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
  child.on('exit', (code) => { process.exitCode = code ?? 1; });
}

module.exports = { getArgs };
if (require.main === module) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
