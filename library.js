var library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },
       printPlaylists : function () {
              var playlists = this.playlists
              for (list in playlists) {
                     console.log(`${list}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
              }
       },
       printTracks : function () {
              var tracks = this.tracks
              for (track in tracks) {
                     console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
              }
       },
       printPlaylist : function (playlistId) {
              var playlists = this.playlists
              for (list in playlists) {
                     if (playlists[list].id === playlistId) {
                            console.log(`${list}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
                            printTracks2(playlists[list].tracks)
                     }
              }
       },
       addTrackToPlaylist : function (trackId, playlistId) {
              var playlists = this.playlists
              var tracks = this.tracks
              if (playlists.hasOwnProperty(playlistId)) {
                     if (!playlists[playlistId].tracks.includes(trackId)) {
                            if (!tracks.hasOwnProperty(trackId)) {
                                   console.log(`${trackId} does not exist`)
                            } else {
                                   playlists[playlistId].tracks.push(trackId)
                            }
                     } else {
                            console.log(`${trackId} already exists`)
                     }
              } else {
                     console.log(`${playlistId} does not exist`)
              }
              console.log(playlists[playlistId])
       },
       addTrack : function (name, artist, album) {
              let track = {
                     id: uid(),
                     name: name,
                     artist: artist,
                     album: album
              }
              this.tracks[track.id] = track
              console.log(this.tracks)
       },
       addPlaylist : function (name) {
              let playlist = {
                     id: uid(),
                     name: name,
                     tracks: []
              }
              this.playlists[playlist.id] = playlist
              console.log(this.playlists)
       },
       printSearchResults : function (query) {
              var found = false
              var mytracks = []
              for (track in this.tracks) {
                     found = searchFunc(query, this.tracks[track].name) || searchFunc(query, this.tracks[track].artist) || searchFunc(query, this.tracks[track].album)
                     if (found === true) {
                            mytracks.push(this.tracks[track])
                     }
              }
              return mytracks
       }
}

function searchFunc (query, input) {
       var reg = new RegExp(query,"g")
       if (input.search(reg) === -1) {
              return null
       }
       return true
}

function printTracks2 (tracksToPrint) {
       var tracks = this.tracks
       for (track in tracks) {
              if (tracksToPrint.includes(tracks[track].id)) {
                     console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
              }
       }

}

function uid () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//console.log(library.printSearchResults("Wood"))
library.printPlaylist("p02")
