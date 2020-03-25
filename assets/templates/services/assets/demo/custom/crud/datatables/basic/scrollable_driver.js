var datatables_ajax_url = 'administrator/zakazy/ajax.json';
var get_date_interval = getAllUrlParams()['date-interval'];

if(!empty(get_date_interval)) {
	datatables_ajax_url += '?date-interval=' + get_date_interval;
}


var DatatablesBasicScrollable = function () {

	var initTable1 = function () {
		var table = $('#m_table_1');
		var table_val = table.DataTable({
			//destroy: false,
			//scrollY: '50vh',
			//autoWidth: false,
			// scrollY:        "300px",
			//fixedColumns:   {
			// heightMatch: 'none'
			// },
			"autoWidth" : false,
			//"paging": '0px',
			"scrollY": 400,
			"scrollX": true,
			//var MyDatatable = $("#memberGrid").dataTable();
			//table_val.columns.adjust().draw();

			//ajax: 'administrator/zakazy/ajax.json',
			ajax: datatables_ajax_url,
			columns: [


				{ "data": "iteration" },
				{ "data": "order_date" },
				{ "data": "driver_name" },
				{ "data": "driver_car" },
				{ "data": "order_time" },
				{ "data": "flight_nmr" },
				{ "data": "travel_start_point" },
				{ "data": "travel_finish_point" },
				{ "data": "workers_comment_plate" },
				{ "data": "passenger_name_phone" },
				{ "data": "workers_name_phone" },
				{ "data": "organization_name" },
				{ "data": "cost" },
				{ "data": "payment_type_name" },
				{ "data": "driver_payment" },
				{ "data": "driver_address" },
				{ "data": "partners_name" },
				{ "data": "partners_car" },
				{ "data": "partners_payment" },
				{ "data": "car_type_name" },
				{ "data": "manager_comment" },
				{ "data": "create_time" },
				{"data": null}
			],
			deferRender: true,
			//scrollX: true,
			//scrollCollapse: true,
			pageLength: 100,
			lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "Все"]],
			columnDefs: [
				{"className": "dt-center", "targets": "_all"},


				{
					targets: -1,
					title: 'Действия',
					orderable: false,
					render: function (data, type, full, meta) {
						var status = {
							no_btn: '',
						}
						if (typeof status[data] === 'undefined') {
							return `
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill edit-row" title="Редактировать запись">
<span class="la la-edit"></span>
</a>
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill copy-row" title="Копировать запись">
<span class="la la-copy"></span>
</a>
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill delete-row" title="Удалить запись">
<span class="la la-remove"></span>
</a>
`;
						} else {
							return status[data];
						}
					},
				},
				{
					targets: 3,
					render: function (data, type, full, meta) {
						var status = {
							0: {'title': 'Не задано', 'state': 'm-badge--danger'},
							1: {'title': 'с 09:00 до 21:00', 'class': ' m-badge--primary'},
							2: {'title': 'с 21:00 до 09:00', 'class': ' m-badge--success'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="m-badge ' + status[data].class + ' m-badge--wide">' + status[data].title + '</span>';
					},
				},
			],
			language: {
				"processing": "Подождите...",
				"search": "Поиск:",
				"lengthMenu": "Показать _MENU_ записей",
				"info": "Записи с _START_ до _END_ из _TOTAL_ записей",
				"infoEmpty": "Записи с 0 до 0 из 0 записей",
				"infoFiltered": "(отфильтровано из _MAX_ записей)",
				"infoPostFix": "",
				"loadingRecords": "Загрузка записей...",
				"zeroRecords": "Записи отсутствуют.",
				"emptyTable": "В таблице отсутствуют данные",
				"paginate": {
					"first": "Первая",
					"previous": "Предыдущая",
					"next": "Следующая",
					"last": "Последняя"
				},
				"aria": {
					"sortAscending": ": активировать для сортировки столбца по возрастанию",
					"sortDescending": ": активировать для сортировки столбца по убыванию"
				}
			},
			createdRow: function(tr, data, index) {
				var travel_date_time = data.order_date + ' ' + data.order_time;
				$(tr).attr({
					"data-id" : data.doc_id,
					"data-travel_date_time" : travel_date_time,
					"data-passenger_name" : data.passenger_name,
					"data-passenger_phone" : data.passenger_phone,
					"data-travel_type" : data.travel_type,
					"data-travel_start_point" : data.travel_start_point,
					"data-travel_finish_point" : data.travel_finish_point,
					"data-flight_nmr" : data.flight_nmr,
					"data-plate_text" : data.plate_text,
					"data-car_type_nmr" : data.car_type_nmr,
					"data-payments_type_nmr" : data.payments_type_nmr,
					"data-payments_type_other_text" : data.payments_type_other_text,
					"data-workers_comment" : data.workers_comment,
					"data-workers_nmr" : data.workers_nmr,
					"data-cost" : data.cost,
					"data-driver_type_nmr" : data.driver_type_nmr,
					"data-driver_nmr" : data.driver_nmr,
					"data-partners_nmr" : data.partners_nmr,
					"data-manager_comment" : data.manager_comment,
					"data-driver_payment" : data.driver_payment,
					"data-organizations_nmr" : data.organization_id,
					"data-partners_organization_nmr" : data.partners_organization_nmr,
					"data-travel_type" : data.travel_type,
					"data-car_type_nmr" : data.car_type_nmr,
					"data-payments_type_nmr" : data.payments_type_nmr,
					"data-payments_type_other_text" : data.payments_type_other_text,
					"data-workers_nmr" : data.workers_nmr,
					"data-driver_type_nmr" : data.driver_type_nmr,
					"data-driver_nmr" : data.driver_nmr,
					"data-partners_nmr" : data.partners_nmr,
					"data-partners_organization_nmr" : data.partners_organization_nmr,
					"data-replacement_car" : data.replacement_car,
					"data-car_type_nmr_replacement" : data.car_type_nmr_replacement
				});
				$('td', tr).eq(3)
					.css('background-color', data.color);

				$('td', tr)
					.css({ 'font-family': 'Arial' });
				//font-family: Geneva, Arial, Helvetica, sans-serif;

				$('td', tr)
					.css({ 'min-width': '1px' });

				$('td', tr) 
					.css({ 'font-size': '12px' });

				$('td', tr) 
					.css({ 'font-weight': 'normal' });

				$('td', tr) 
					.css('padding', '0px')

				$('td', tr).eq(2) // Водитель
					.css({ 'min-width': '170px' });


				$('td', tr).eq(3) // Автомобиль
					.css({ 'min-width': '190px' });

				$('td', tr).eq(6) // Пункт А
					.css({ 'min-width': '270px' });

				$('td', tr).eq(7) // Пункт Б
					.css({ 'min-width': '300px' });

				$('td', tr).eq(10) // Имя пассажира
					.css({ 'min-width': '270px' });

				$('td', tr).eq(11) // Контакт пассажира
					.css({ 'min-width': '270px' });

				$('td', tr).eq(16) // Оплата
					.css({ 'min-width': '150px' });

				$('td', tr).eq(22) // Кол-во пассажиров
					.css({ 'min-width': '150px' });

				$('td', tr).eq(23) // Коммент менеджера
					.css({ 'min-width': '150px' });

			}
		});
		//	table_val.columns.adjust().draw();
		return table_val;
	};

	return {

		//main function to initiate the module
		init: function () {
			return initTable1();
		},

	};

}();

/*Проверка на пустоту объекта*/
function isEmptyObject(obj) {
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
}
/*Проверка на пустоту*/
function empty(mixed_var) {
	return (mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null || mixed_var === false || (Array.isArray(mixed_var) && mixed_var.length === 0) || isEmptyObject(mixed_var));
}

/*Получение параметров GET-запроса из url*/
function getAllUrlParams(url) {
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	var obj = {};

	if (queryString) {
		queryString = queryString.split('#')[0];
		var arr = queryString.split('&');
		for (var i = 0; i < arr.length; i++) {
			var a = arr[i].split('=');
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function (v) {
				paramNum = v.slice(1, -1);
				return '';
			});
			var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
			paramName = paramName.toLowerCase();
			paramValue = paramValue.toLowerCase();
			if (obj[paramName]) {
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				if (typeof paramNum === 'undefined') {
					obj[paramName].push(paramValue);
				}
				else {
					obj[paramName][paramNum] = paramValue;
				}
			}
			else {
				obj[paramName] = paramValue;
			}
		}
	}

	return obj;
}

/*Получаем параметры из таблицы DataTable и генерируем url*/
function get_add_page(table) {
	var get_page = '';
	var this_url = window.location.pathname;
	var a_get_url = getAllUrlParams();
	if(!empty(a_get_url)) {
		if (!empty(a_get_url['date-interval'])) {
			get_page = 'date-interval=' + a_get_url['date-interval'] + '&';
		}
	}

	var info = table.page.info();
	var page = info.page;
	page += 1;
	var length = info.length;
	var a_order = table.order();
	var order_by = a_order[0][0];
	var order_dir = a_order[0][1];
	var delim = '?';
	if (length != '' && delim != '') {
		get_page += 'length=' + length + '&page=' + page + '&order_by=' + order_by + '&order_dir=' + order_dir;
		var url = this_url + delim + get_page;
		history.pushState(null, null, url);
	}
}

function set_table_params(table) {
	var a_get_url = getAllUrlParams();
	if(!empty(a_get_url)) {
		if (!empty(a_get_url.length)) {
			table.page.len(a_get_url.length);
		}
		if (!empty(a_get_url.order_by) && !empty(a_get_url.order_dir)) {
			table.order([a_get_url.order_by, a_get_url.order_dir]);
		}
		if (!empty(a_get_url.page)) {
			var page = parseInt(a_get_url.page);
			page -= 1;
			table.page(page);
		}
		table.draw('full-hold');
	}
}


jQuery(document).ready(function () {

	var table = DatatablesBasicScrollable.init();
	/*Пагинация*/
	set_table_params(table);
	$('body').on('page.dt', function (event) {
		console.log('page');
		get_add_page(table);
	});

	$('body').on('length.dt', function (event) {
		console.log('length');
		get_add_page(table);
	});
	$('body').on('order.dt', function (event) {
		console.log('order');
		get_add_page(table);
	});


	//table.page( 'next' ).draw( 'page' );

	//console.log($('table[data-table="service_orders"]').find('td[nowrap]').html());
	/*$('table[data-table="service_orders"]').find('td[nowrap]').each(function (indx, element) {
         var test = $(element).html();
         console.log(test);
     });*/
	/*$('#m_table_1').on( 'page.dt', function () {
        var info = table.page.info();
        console.log('Showing page: '+info.page+' of '+info.pages );
    } );*/
});
