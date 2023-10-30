var totalDownloads = 374294; // Include downloads not part of API response

var handleApiResponse = function() {
  if (xmlHttp.readyState === 4) {
    var releasesData = JSON.parse(xmlHttp.responseText);
    totalDownloads += releasesData.reduce(
      function (total, current) {
        return total + current.assets[0].download_count;
      },
      0
    );

    var linkHeader = xmlHttp.getResponseHeader("Link");
    var nextUrlMatch = linkHeader.match(/<(.+)>; rel="next"/);
    if (nextUrlMatch) {
      xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = handleApiResponse;
      xmlHttp.open("GET", nextUrlMatch[1]);
      xmlHttp.send();
    } else {
      document.getElementById("download-count").innerText = totalDownloads.toLocaleString() + " downloads";
    }
  }
};

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = handleApiResponse;
xmlHttp.open("GET", "https://api.github.com/repos/LiveSplit/LiveSplit/releases");
xmlHttp.send();
