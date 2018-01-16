function initMap() {
        var uluru = {lat: 22.6235014, lng: 120.28377669999998
};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

//取得API資料功能
$.ajax({
  url: 'http://ptx.transportdata.tw/MOTC/v2/Rail/Metro/LiveBoard/KRTC?$select=StationID%2CEstimateTime%2CDestinationStaionID&$filter=StationID%20eq%20%27O2%27&$format=JSON',
  type:'GET',
  dataType:'json',
  success:function(data){
    data.forEach(function(data){
      if(data.DestinationStaionID==="OT1"){
        $("#toEastTime").text(data.EstimateTime);
      } else if(data.DestinationStaionID==="O1"){
        $("#toWestTime").text(data.EstimateTime);
      }
    });
  },
  error:function(e){
    console.log(e);
  }
})