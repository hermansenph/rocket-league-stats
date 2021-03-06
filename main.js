var $search = document.querySelector('#search-top')
var $searchCompare = ''
var $leaderboard = document.querySelector('#leader-board')
var $playerStats = document.querySelector('#player-stats')
var $siteLogo = document.querySelector('#site-logo')
var apiKey = window.location.hash.slice(1)

function leaderBoardMMRButtons() {
  var createDiv = document.createElement('div')
  var createSoloDuel = document.createElement('button')
  var createDoubles = document.createElement('button')
  var createSoloStandard = document.createElement('button')
  var createStandard = document.createElement('button')
  createSoloDuel.className = 'mmrButton'
  createDoubles.className = 'mmrButton'
  createSoloStandard.className = 'mmrButton'
  createStandard.className = 'mmrButton'
  createSoloDuel.setAttribute('type', 'button')
  createDoubles.setAttribute('type', 'button')
  createSoloStandard.setAttribute('type', 'button')
  createStandard.setAttribute('type', 'button')
  createDiv.className = 'buttons'
  createSoloDuel.id = 'solo-duel'
  createDoubles.id = 'doubles'
  createSoloStandard.id = 'solo-standard'
  createStandard.id = 'standard'
  createSoloDuel.textContent = 'Solo Duel'
  createDoubles.textContent = 'Doubles'
  createSoloStandard.textContent = 'Solo Standard'
  createStandard.textContent = 'Standard'
  createDiv.appendChild(createSoloDuel)
  createDiv.appendChild(createDoubles)
  createDiv.appendChild(createSoloStandard)
  createDiv.appendChild(createStandard)
  return createDiv
}

function leaderBoardStatButtons() {
  var createDiv = document.createElement('div')
  var createWins = document.createElement('button')
  var createGoals = document.createElement('button')
  var createMVPs = document.createElement('button')
  var createSaves = document.createElement('button')
  var createShots = document.createElement('button')
  var createAssists = document.createElement('button')
  createWins.className = 'statButton'
  createGoals.className = 'statButton'
  createMVPs.className = 'statButton'
  createSaves.className = 'statButton'
  createShots.className = 'statButton'
  createAssists.className = 'statButton'
  createWins.setAttribute('type', 'button')
  createGoals.setAttribute('type', 'button')
  createMVPs.setAttribute('type', 'button')
  createSaves.setAttribute('type', 'button')
  createShots.setAttribute('type', 'button')
  createAssists.setAttribute('type', 'button')
  createDiv.className = 'buttons'
  createWins.id = 'wins'
  createGoals.id = 'goals'
  createMVPs.id = 'mvps'
  createSaves.id = 'saves'
  createShots.id = 'shots'
  createAssists.id = 'assists'
  createWins.textContent = 'Wins'
  createGoals.textContent = 'Goals'
  createMVPs.textContent = 'MVPs'
  createSaves.textContent = 'Saves'
  createShots.textContent = 'Shots'
  createAssists.textContent = 'Assists'
  createDiv.appendChild(createWins)
  createDiv.appendChild(createGoals)
  createDiv.appendChild(createMVPs)
  createDiv.appendChild(createSaves)
  createDiv.appendChild(createShots)
  createDiv.appendChild(createAssists)
  return createDiv
}

function leaderBoardHeader(text) {
  var createUl = document.createElement('ul')
  var createPlace = document.createElement('li')
  var createPlayer = document.createElement('li')
  var createScore = document.createElement('li')
  createUl.className = 'row'
  createPlace.className = 'place'
  createPlayer.className = 'player'
  createScore.className = 'score'
  createPlace.textContent = 'RANK'
  createPlayer.textContent = 'NAME'
  createScore.textContent = 'SCORE'
  createUl.appendChild(createPlace)
  createUl.appendChild(createPlayer)
  createUl.appendChild(createScore)
  return createUl
}

function leaderBoardRow(player, i) {
  var createUl = document.createElement('ul')
  var createPlace = document.createElement('li')
  var createPlayer = document.createElement('li')
  var createScore = document.createElement('li')
  createUl.className = 'row'
  createPlace.className = 'place'
  createPlayer.className = 'player'
  createScore.className = 'score'
  createPlace.textContent = i + 1
  createPlayer.textContent = player.name
  createScore.textContent = player.mmr
  createUl.appendChild(createPlace)
  createUl.appendChild(createPlayer)
  createUl.appendChild(createScore)
  return createUl
}

function removeElement(element) {
  element.className = 'hidden'
  element.innerHTML = ''
}

function showElement(element) {
  element.className = ''
}

function clearLeaderBoard(div) {
  div.innerHTML = ''
}

function clearPlayerStats() {
  $playerStats.innerHTML = ''
}

function createPlayerName(searchValue) {
  var $playerName = document.createElement('p')
  $playerName.textContent = searchValue.displayName
  $playerName.id = 'player-name'
  $playerStats.appendChild($playerName)
}

function createStatHeader() {
  var createTable1 = document.createElement('table')
  var create$tr1 = document.createElement('tr')
  var create$th1 = document.createElement('th')
  var create$th2 = document.createElement('th')
  createTable1.className = 'table'
  createTable1.id = 'player-stats-points'
  create$th1.textContent = 'Stat'
  create$th2.textContent = 'Score'
  create$tr1.appendChild(create$th1)
  create$tr1.appendChild(create$th2)
  createTable1.appendChild(create$tr1)
  return createTable1
}

function createMMRHeader() {
  var createTable2 = document.createElement('table')
  var create$tr2 = document.createElement('tr')
  var create$th3 = document.createElement('th')
  var create$th4 = document.createElement('th')
  createTable2.className = 'table'
  createTable2.id = 'player-stats-rank'
  create$th3.textContent = 'Game Mode'
  create$th4.textContent = 'MMR'
  create$tr2.appendChild(create$th3)
  create$tr2.appendChild(create$th4)
  createTable2.appendChild(create$tr2)
  return createTable2
}

function createStatScore(statistics, i) {
  var create$tr1 = document.createElement('tr')
  var create$td1 = document.createElement('td')
  var create$td2 = document.createElement('td')
  var statArray = [
    'Wins',
    'Goals',
    'MVPs',
    'Saves',
    'Shots',
    'Assists',
    statistics.stats.wins,
    statistics.stats.goals,
    statistics.stats.mvps,
    statistics.stats.saves,
    statistics.stats.shots,
    statistics.stats.assists
  ]
  create$td1.textContent = statArray[i]
  create$td2.textContent = statArray[(i + 6)]
  create$tr1.appendChild(create$td1)
  create$tr1.appendChild(create$td2)
  return create$tr1
}

function createStatMMR(statistics, i) {
  var create$tr1 = document.createElement('tr')
  var create$td1 = document.createElement('td')
  var create$td2 = document.createElement('td')
  var statArray = [
    'Solo Duel',
    'Doubles',
    'Solo Standard',
    'Standard',
    statistics.rankedSeasons[5][10].rankPoints,
    statistics.rankedSeasons[5][11].rankPoints,
    statistics.rankedSeasons[5][12].rankPoints,
    statistics.rankedSeasons[5][13].rankPoints
  ]
  create$td1.textContent = statArray[i]
  create$td2.textContent = statArray[(i + 4)]
  create$tr1.appendChild(create$td1)
  create$tr1.appendChild(create$td2)
  return create$tr1
}

var searchPlayer = function (searchValue) {
  var searchReq = new XMLHttpRequest()
  searchReq.addEventListener('load', searchListener)
  searchReq.open('GET', 'https://api.rocketleaguestats.com/v1/player?unique_id=' + searchValue + '&platform_id=1&apikey=' + apiKey, true)
  searchReq.responseType = 'json'
  searchReq.send()
  function searchListener() {
    if (searchReq.status === 200) {
      var statObject = this.response
      generateStats(statObject)
    }
  }
}

var searchPlayerComparison = function (searchValue) {
  var searchReq = new XMLHttpRequest()
  searchReq.addEventListener('load', searchListener)
  searchReq.open('GET', 'https://api.rocketleaguestats.com/v1/player?unique_id=' + searchValue + '&platform_id=1&apikey=' + apiKey, true)
  searchReq.responseType = 'json'
  searchReq.send()
  function searchListener() {
    if (searchReq.status === 200) {
      var statObject = this.response
      generateComparison(statObject)
    }
  }
}

function generateStats(player) {
  var $tableStats = document.querySelector('#player-stats')
  removeElement($leaderboard)
  showElement($playerStats)
  clearPlayerStats()
  createPlayerName(player)
  var $tableStatsPoints = createStatHeader()
  var $tableStatsMMR = createMMRHeader()
  $tableStats.appendChild($tableStatsPoints)
  $tableStats.appendChild($tableStatsMMR)
  for (var num = 0; num < 6; num++) {
    $tableStatsPoints.appendChild(createStatScore(player, num))
  }
  for (num = 0; num < 4; num++) {
    $tableStatsMMR.appendChild(createStatMMR(player, num))
  }
  document.querySelector('#player-stats').appendChild(addComparisonSearch())
  $searchCompare = document.querySelector('#search-bottom')
  $searchCompare.addEventListener('keydown', generateComparisonData)
}

function generateData(event) {
  if (event.keyCode === 13) {
    var searchName = $search.value
    searchPlayer(searchName)
  }
}

function generateComparisonData(event) {
  if (event.keyCode === 13) {
    var searchName = $searchCompare.value
    searchPlayerComparison(searchName)
  }
}

function generateComparison(player) {
  var $tableStats = document.querySelector('#player-stats-points')
  var $tableMMR = document.querySelector('#player-stats-rank')
  var $tableStatsRow = $tableStats.querySelectorAll('tr')
  var $tableMMRRow = $tableMMR.querySelectorAll('tr')
  if (player !== undefined && $tableStatsRow[0].querySelectorAll('th')[9] === undefined) {
    var $tableCompareHeader = createComparisonHeader(player)
    $tableStatsRow[0].appendChild($tableCompareHeader.cloneNode(true))
    $tableMMRRow[0].appendChild($tableCompareHeader.cloneNode(true))
    for (var num = 0; num < 6; num++) {
      $tableStatsRow[(num + 1)].appendChild(createStatScoreComparison(player, num))
    }
    for (num = 0; num < 4; num++) {
      $tableMMRRow[(num + 1)].appendChild(createStatMMRComparison(player, num))
    }
    $tableStats.addEventListener('click', removeComparison)
    $tableMMR.addEventListener('click', removeComparison)
  }
}

function addComparisonSearch() {
  var create$input = document.createElement('input')
  var create$div = document.createElement('div')
  var create$img = document.createElement('img')
  create$input.id = 'search-bottom'
  create$div.id = 'compare-search'
  create$img.id = 'search-icon-2'
  create$input.setAttribute('type', 'text')
  create$input.setAttribute('placeholder', 'Comparison')
  create$img.setAttribute('src', 'images/search-icon.png')
  create$div.appendChild(create$input)
  create$div.appendChild(create$img)
  return create$div
}

function createStatScoreComparison(statistics, i) {
  var create$td1 = document.createElement('td')
  var statArray = [
    statistics.stats.wins,
    statistics.stats.goals,
    statistics.stats.mvps,
    statistics.stats.saves,
    statistics.stats.shots,
    statistics.stats.assists
  ]
  create$td1.textContent = statArray[i]
  return create$td1
}

function createStatMMRComparison(statistics, i) {
  var create$td1 = document.createElement('td')
  var statArray = [
    statistics.rankedSeasons[5][10].rankPoints,
    statistics.rankedSeasons[5][11].rankPoints,
    statistics.rankedSeasons[5][12].rankPoints,
    statistics.rankedSeasons[5][13].rankPoints
  ]
  create$td1.textContent = statArray[i]
  return create$td1
}

function createComparisonHeader(playerName) {
  var create$th = document.createElement('th')
  var create$button = document.createElement('button')
  create$button.setAttribute('type', 'button')
  create$button.className = 'removePlayer'
  create$button.textContent = '(x)'
  create$th.textContent = playerName.displayName
  create$th.appendChild(create$button)
  return create$th
}

function removeComparison(event) {
  var $tableStats = document.querySelector('#player-stats-points')
  var $tableMMR = document.querySelector('#player-stats-rank')
  var stat$th = $tableStats.querySelectorAll('th')
  var mmr$th = $tableMMR.querySelectorAll('th')
  var stat$tr = $tableStats.querySelectorAll('tr')
  var mmr$tr = $tableMMR.querySelectorAll('tr')
  for (var i = 0; i < stat$th.length; i++) {
    if (event.target.parentElement.textContent === document.querySelectorAll('th')[i].textContent) {
      stat$tr[0].removeChild(stat$th[i])
      mmr$tr[0].removeChild(mmr$th[i])
      for (var num = 1; num < stat$tr.length; num++) {
        stat$tr[num].removeChild(stat$tr[num].querySelectorAll('td')[i])
      }
      for (num = 1; num < mmr$tr.length; num++) {
        mmr$tr[num].removeChild(mmr$tr[num].querySelectorAll('td')[i])
      }
    }
  }
}

var writeLeaderBoard = function updateLeaderBoard(event) {
  showElement($leaderboard)
  removeElement($playerStats)
  var leaderBoardList = leaderBoardArray
  var leaderBoardDOM = document.querySelector('#leader-board')
  var createDiv = document.createElement('div')
  createDiv.id = 'leader-board-rows'
  var leaderBoardDiv = document.querySelector('#leader-board-rows')
  if (document.querySelector('.buttons') === null) {
    leaderBoardDOM.appendChild(leaderBoardStatButtons())
    leaderBoardDOM.appendChild(leaderBoardMMRButtons())
    var $buttons = document.querySelectorAll('.buttons')[0]
    var $buttons2 = document.querySelectorAll('.buttons')[1]
    $buttons.addEventListener('click', writeLeaderBoard)
    $buttons2.addEventListener('click', writeLeaderBoard)
    leaderBoardDOM.appendChild(createDiv)
  }
  if (event.target.textContent !== null && (event.target.className === 'statButton' || event.target.className === 'mmrButton')) {
    clearLeaderBoard(leaderBoardDiv)
    leaderBoardDiv.appendChild(leaderBoardHeader(event.target.textContent))
    var leaderBoardLookup = {
      'solo-duel': 0,
      'doubles': 1,
      'solo-standard': 2,
      'standard': 3,
      'wins': 4,
      'goals': 5,
      'mvps': 6,
      'saves': 7,
      'shots': 8,
      'assists': 9
    }
    var board = leaderBoardLookup[event.target.id]
    for (var i = 0; i < 10; i++) {
      leaderBoardDiv.appendChild(leaderBoardRow(leaderBoardList[board][0][i], i))
    }
  }
}

var soloDuelArray = []
var doublesArray = []
var soloStandardArray = []
var standardArray = []
var winsArray = []
var goalsArray = []
var mvpsArray = []
var savesArray = []
var shotsArray = []
var assistsArray = []
var leaderBoardArray = [
  soloDuelArray,
  doublesArray,
  soloStandardArray,
  standardArray,
  winsArray,
  goalsArray,
  mvpsArray,
  savesArray,
  shotsArray,
  assistsArray
]

var reqList = [
  '10', soloDuelArray, 10,
  '11', doublesArray, 11,
  '12', soloStandardArray, 12,
  '13', standardArray, 13,
  'wins', winsArray, 'stats.wins',
  'goals', goalsArray, 'stats.goals',
  'mvps', mvpsArray, 'stats.mvps',
  'saves', savesArray, 'stats.saves',
  'shots', shotsArray, 'stats.shots',
  'assists', assistsArray, 'stats.assists'
]

function requestStats(type, done) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.rocketleaguestats.com/v1/leaderboard/stat?type=' + type + '&apikey=' + apiKey)
  xhr.responseType = 'json'
  xhr.addEventListener('load', function () {
    done(xhr.response)
  })
  xhr.send()
}

function requestMMR(type, done) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.rocketleaguestats.com/v1/leaderboard/ranked?playlist_id=' + type + '&apikey=' + apiKey)
  xhr.responseType = 'json'
  xhr.addEventListener('load', function () {
    done(xhr.response)
  })
  xhr.send()
}

function extractStat(type, leaderBoard) {
  var stats = []
  for (var num = 0; num < 10; num++) {
    var leader = leaderBoard[num]
    var stat = {
      name: leader.displayName,
      mmr: leader.stats[type]
    }
    stats.push(stat)
  }
  return stats
}

function extractMMR(type, leaderBoard) {
  var stats = []
  for (var num = 0; num < 10; num++) {
    var leader = leaderBoard[num]
    var stat = {
      name: leader.displayName,
      mmr: leader.rankedSeasons[5][type].rankPoints
    }
    stats.push(stat)
  }
  return stats
}

addEventListener('load', function () {
  for (var i = 12, time = 0; i < reqList.length; i = i + 3, time++) {
    doScaledTimeout(i, time)
  }
  function doScaledTimeout(i, time) {
    setTimeout(function (event) {
      var statType = reqList[i]
      requestStats(statType, function (response) {
        var stats = extractStat(statType, response)
        var array = reqList[i + 1]
        array.push(stats)
      })
    }, time * 1500)
  }
})

addEventListener('load', function () {
  for (var i = 0, time = 0; i < 12; i = i + 3, time++) {
    doScaledTimeout(i, time)
  }
  function doScaledTimeout(i, time) {
    setTimeout(function (event) {
      var statType = reqList[i]
      requestMMR(statType, function (response) {
        var stats = extractMMR(statType, response)
        var array = reqList[i + 1]
        array.push(stats)
      })
    }, time * 1500)
  }
})

addEventListener('load', writeLeaderBoard)
$search.addEventListener('keydown', generateData)
$siteLogo.addEventListener('click', writeLeaderBoard)
