var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://api.github.com/repos/LiveSplit/LiveSplit/releases", false);
xmlHttp.send(null);

var releasesData = JSON.parse(xmlHttp.responseText);
var totalDownloads = releasesData.reduce(
  function (total, current) {
    return total + current.assets[0].download_count;
  },
  145579 // pre-GitHub download total
);

document.getElementById("download-count").innerText = totalDownloads + " downloads";
