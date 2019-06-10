console.log("Hello, Oli")

import "./icons.js"

import './icons.js'

class Player {
  constructor(node) {
    this.root = typeof node === 'string' ? document.querySelector(node) : node
    
    this.$ = selector => this.root.querySelector(selector)
    this.$$ = selector => this.root.querySelectorAll(selector)
    
    this.songList = []
    this.currentIndex = 1
    
    this.audio = new Audio()

    this.start()
    this.bind()

  }

  
  start() {
    
    //1️⃣我们通过 fetch 的方式获取到“数据”：
    fetch("https://qdywxs.github.io/data-mock/qdywxs-music/music-list.json")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.songList = data  //2️⃣然后将“数据”赋值给实例对象的 songList（箭头函数里的 this 指向它上一级的 this）；
        this.loadSong()  //3️⃣把获取到的“数据”先缓存起来；
      })
  }
  
  
  //4️⃣把获取到的数据进行分门别类的“缓存”：
  loadSong() {
    let songObj = this.songList[this.currentIndex]  /*4️⃣-①：“缓存”当前播放歌曲的所有“数据”信息，
                                                    并赋值给 songObj；*/
    this.audio.src = songObj.url
    
  }


  bind() {
    let self = this
    this.root.querySelector(".btn-play-pause").onclick = function() {
      if(this.classList.contains("playing")) {
        self.audio.pause()  //把音乐暂停掉
        
        this.classList.remove("playing")  //移除 playing
        this.classList.add("pause")  //添加 pause
        
        this.querySelector("use").setAttribute("xlink:href", "#icon-play")
      }else if(this.classList.contains("pause")) {
        self.audio.play()

        this.classList.remove("pause")  //移除 pause
        this.classList.add("playing")  //添加 playing
        
        this.querySelector("use").setAttribute("xlink:href", "#icon-pause")
        
      }

    }

    this.root.querySelector(".btn-pre").onclick = function() {
      console.log("pre")
      self.currentIndex = (self.currentIndex - 1 + self.songList.length) % self.songList.length
      self.loadSong()
      self.playSong()
    }

    this.root.querySelector(".btn-next").onclick = function() {
      console.log("next")
      self.currentIndex = (self.currentIndex + 1) % self.songList.length
      self.loadSong()
      self.playSong()
    }



  }



  playSong() {
    this.audio.oncanplaythrough = () => this.audio.play()
  }

}







window.p = new Player("#player")