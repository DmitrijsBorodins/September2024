function calculateVolumeAndArea(length) {
   if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка";
   }

   let volume = 0,
      area = 0;

   volume = length * length * length;
   // length ** 3 - это тоже самое, что и выше или варианты через цикл.
   // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
   area = 6 * (length * length);

   return Объем куба: ${ volume }, площадь всей поверхности: ${ area };
}


function getTimeFromMinutes(minutesTotal) {

   if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
   }


}