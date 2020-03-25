var DatatablesBasicScrollable = function () {

    var initTable1 = function () {
        var table = $('#m_table_1');

        // begin first table
        table.DataTable({
            destroy: true,
            scrollY: '50vh',
            scrollX: true,
            scrollCollapse: true,
            pageLength: 100,
            lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "Все"]],
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

    return {

        //main function to initiate the module
        init: function () {
            initTable1();
        },

    };

}();

jQuery(document).ready(function () {
    DatatablesBasicScrollable.init();
});