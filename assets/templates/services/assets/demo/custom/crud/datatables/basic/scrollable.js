var DatatablesBasicScrollable = function () {

    var initTable1 = function () {
        var table = $('#m_table_1');

        // begin first table
        table.DataTable({
            destroy: true,
            scrollY: '50vh',
            scrollX: true,
            scrollCollapse: true,
            columnDefs: [
                {
                    targets: -1,
                    title: 'Действия',
                    orderable: false,
                    render: function (data, type, full, meta) {
                        return `

<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill edit-row" title="Редактировать запись">
<i class="la la-edit"></i>
</a>
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill copy-row" title="Копировать запись">
<i class="la la-copy"></i>
</a>
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill delete-row" title="Удалить запись">
<i class="la la-remove"></i>
</a>
`;
                    },
                },
                /*{
                    targets: 2,
                    render: function (data, type, full, meta) {
                        var status = {
                            1: {'title': 'Pending', 'class': 'm-badge--brand'},
                            2: {'title': 'Delivered', 'class': ' m-badge--metal'},
                            3: {'title': 'Canceled', 'class': ' m-badge--primary'},
                            4: {'title': 'Success', 'class': ' m-badge--success'},
                            5: {'title': 'Info', 'class': ' m-badge--info'},
                            6: {'title': 'Danger', 'class': ' m-badge--danger'},
                            7: {'title': 'Warning', 'class': ' m-badge--warning'},
                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="m-badge ' + status[data].class + ' m-badge--wide">' + status[data].title + '</span>';
                    },
                },*/
                {
                    targets: 3,
                    render: function (data, type, full, meta) {
                        var status = {
                            0: {'title': 'Нет', 'state': 'danger'},
                            1: {'title': 'Да', 'state': 'accent'},
                            2: {'title': 'Другое', 'state': 'primary'},
                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="m-badge m-badge--' + status[data].state + ' m-badge--dot"></span>&nbsp;' +
                            '<span class="m--font-bold m--font-' + status[data].state + '">' + status[data].title + '</span>';
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
            }
        });
    };

    var initTable2 = function () {
        var table = $('#m_table_2');

        // begin second table
        table.DataTable({
            destroy: true,
            scrollY: '50vh',
            scrollX: true,
            scrollCollapse: true,
            createdRow: function (row, data, index) {
                var status = {
                    1: {'title': 'Pending', 'class': 'm-badge--brand'},
                    2: {'title': 'Delivered', 'class': ' m-badge--metal'},
                    3: {'title': 'Canceled', 'class': ' m-badge--primary'},
                    4: {'title': 'Success', 'class': ' m-badge--success'},
                    5: {'title': 'Info', 'class': ' m-badge--info'},
                    6: {'title': 'Danger', 'class': ' m-badge--danger'},
                    7: {'title': 'Warning', 'class': ' m-badge--warning'},
                };
                var badge = '<span class="m-badge ' + status[data[18]].class + ' m-badge--wide">' + status[data[18]].title + '</span>';
                row.getElementsByTagName('td')[18].innerHTML = badge;

                status = {
                    1: {'title': 'Online', 'state': 'danger'},
                    2: {'title': 'Retail', 'state': 'primary'},
                    3: {'title': 'Direct', 'state': 'accent'},
                };
                badge = '<span class="m-badge m-badge--' + status[data[19]].state + ' m-badge--dot"></span>&nbsp;' +
                    '<span class="m--font-bold m--font-' + status[data[19]].state + '">' + status[data[19]].title + '</span>';
                row.getElementsByTagName('td')[19].innerHTML = badge;
            },
            columnDefs: [
                {
                    targets: -1,
                    title: 'Actions',
                    orderable: false,
                    render: function (data, type, full, meta) {
                        return `
<span class="dropdown">
<a href="#" class="btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown" aria-expanded="true">
<i class="la la-ellipsis-h"></i>
</a>
<div class="dropdown-menu dropdown-menu-right">
<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
</div>
</span>
<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" title="View">
<i class="la la-edit"></i>
</a>`;
                    },
                }],
        });
    };

    return {

        //main function to initiate the module
        init: function () {
            initTable1();
            initTable2();
        },

    };

}();

jQuery(document).ready(function () {
    DatatablesBasicScrollable.init();
});
