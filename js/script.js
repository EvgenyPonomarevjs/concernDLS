let center = [55.73217456900546, 37.43542099999997];

function init() {
 let map = new ymaps.Map("map", {
  center: center,
  zoom: 16,
 });
 map.controls.add(
  new ymaps.control.ZoomControl() // Добавление элемента управления картой
 );

 myPlacemark = new ymaps.Placemark(
  [55.73217456900546, 37.43542099999997],
  {},
  {
   // Координаты метки объекта
   preset: "twirl#skatingIcon", // Тип метки
  }
 );

 map.geoObjects.add(myPlacemark);

 map.controls.remove("geolocationControl"); // удаляем геолокацию
 map.controls.remove("searchControl"); // удаляем поиск
 map.controls.remove("trafficControl"); // удаляем контроль трафика
 map.controls.remove("typeSelector"); // удаляем тип
 map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
 map.controls.remove("zoomControl"); // удаляем контрол зуммирования
 map.controls.remove("rulerControl"); // удаляем контрол правил
 map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
