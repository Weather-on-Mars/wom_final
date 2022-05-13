document.getElementById('dateInput').addEventListener('click', function(event){
    var request = new XMLHttpRequest();
    var date = document.getElementById('dateValue').value;})

    function parseData(){
        var url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json';
        $.getJSON(url, function(data){
            var matchingDate = data.filter(function(x){return x.terrestrial_date == date; });
            console.log(matchingDate);})



}
