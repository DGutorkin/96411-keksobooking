const VERSION = `v0.0.1`;
const GREETING = `Привет пользователь!
Эта программа будет запускать сервер «keksobooking».
Автор: Dmitry Gutorkin.`;
const HELP = `Доступные команды:
--help    — печатает этот текст;
--version — печатает версию приложения;`;

const warnUnknownOption = arg => {
  console.error(`Неизвестная команда ${arg}.\nЧтобы прочитать правила использования приложения, наберите "--help"`);
  process.exit(1);
}

switch (process.argv[2]) {
  case typeof `undefined`:
    console.log(GREETING);
    break;
  case `--version`:
    console.log(VERSION);
    break;
  case `--help`:
    console.log(HELP);
    break;
  default:
    warnUnknownOption(process.argv[2]);
}
