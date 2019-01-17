$('.carousel').carousel('cycle')

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
