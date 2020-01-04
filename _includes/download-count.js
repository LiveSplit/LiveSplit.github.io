var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState === 4) {
    var releasesData = JSON.parse(xmlHttp.responseText);
    var totalDownloads = releasesData.reduce(
      function (total, current) {
        return total + current.assets[0].download_count;
      },
      145579 // pre-GitHub download total
    );
    
    document.getElementById("download-count").innerText = totalDownloads + " downloads";
  }
};

xmlHttp.open("GET", "https://api.github.com/repos/LiveSplit/LiveSplit/releases");
xmlHttp.send();
