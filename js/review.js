$(function () {
    $.ajax({
        type: 'GET',
        url: "https://pacific-peak-27279.herokuapp.com/api/ProductReview/"

    }).then(function (data) {

        viewProduct(data);

    });

    function viewProduct(data) {
     
        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><font size="3" color="black">' + data[i].rating +'</font></td><td><font size="3" color="black">' + data[i].comment + '</font></td><td><font size="3" color="black">' + data[i].date +'</font></td><td><font size="3" color="black">'+data[i].reviewer + '</font></td></tr>';
            $('#review').append(row);
        }
  

        
    }

});