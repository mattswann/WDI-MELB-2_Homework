var topKPSongs = ['California Girls', 'Last Friday Night', 'I kissed a girl', 'E.T', 'Firework'];
console.log(topKPSongs);

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

for (var i = 0; i < topKPSongs.length; i++) {
	console.log("My " + ordinal_suffix_of(i+1) + " choice is " + topKPSongs[i] + ".");
}
