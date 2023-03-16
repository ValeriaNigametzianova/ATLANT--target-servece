import { React, useEffect, useState } from 'react'
import useSound from 'use-sound' //для работы со звуком
import audio from '../audio/video5386603207885595710.mp3' // импорт музыки
import Play from '../icons/play.svg'
import Pause from '../icons/pause.svg'
import '../css/player.css'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(audio)
  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  }) // текущее положение звука в минутах и секундах
  const [seconds, setSeconds] = useState() // текущая позиция звука в секундах

  let sec = duration / 1000
  let min = Math.floor(sec / 60)
  let secRemain = Math.floor(sec % 60)
  let time = {
    min: min,
    sec: secRemain,
  }

  useEffect(() => {
    sec = duration / 1000
    min = Math.floor(sec / 60)
    secRemain = Math.floor(sec % 60)
    time = {
      min: min,
      sec: secRemain,
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])) // устанавливаем состояние с текущим значением в секундах
        min = Math.floor(sound.seek([]) / 60)
        sec = Math.floor(sound.seek([]) % 60)
        setCurrTime({
          min,
          sec,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

  const playingButton = () => {
    if (isPlaying) {
      pause() // приостанавливаем воспроизведение звука
      setIsPlaying(false)
    } else {
      play() // воспроизводим аудиозапись
      setIsPlaying(true)
    }
  }

  return (
    <div className="player">
      {/* <img className="musicCover" src="https://picsum.photos/200/200" /> */}
      <div>
        <div className="h3_inner">Подкаст Полины Кровяковой</div>
      </div>
      <div className="component">
        <div>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              {/* <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>*/}

              <img className="musicCover_play" src={Play} />
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <img className="musicCover_pause" src={Pause} />
            </button>
          )}
        </div>
        <div style={{ width: '100%' }}>
          <div className="time h5">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek([e.target.value])
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
