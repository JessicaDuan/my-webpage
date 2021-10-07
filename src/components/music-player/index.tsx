import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlayCircleOutlined, PauseCircleOutlined, StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import MusicalNotes from './musical-notes';
import bgm from '@/assets/audio/SakuraIroNoYume.mp3';
import bgm2 from '@/assets/audio/人間だった.mp3';
import img from '@/assets/audio/SakuraIroNoYume.jpg';

function MusicPlayer({ ...props }) {
  const audio = useRef<HTMLAudioElement>(null);

  const [playList, setPlayList] = useState<any[]>([]); // 播放列表
  const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
  const [current, setCurrent] = useState(0); // 当前播放的序号

  // 获取播放列表
  useEffect(() => {
    const data = [bgm, bgm2];
    setPlayList(data);
  }, []);

  // 每次setState后根据当前实际播放状态启动audio
  useEffect(() => {
    const { current: player } = audio;
    if (player) {
      if (isPlaying) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [isPlaying]);

  // 播放
  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // 暂停
  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // 上一首
  const prev = useCallback(() => {
    if (current > 0) {
      pause();
      setCurrent(current - 1);
      play();
    }
  }, [current, pause, play]);

  // 下一首
  const next = useCallback(() => {
    if (current < playList.length - 1) {
      pause();
      setCurrent(current + 1);
      play();
    }
  }, [current, pause, play, playList.length]);

  const audioSrc = playList[current]; // 当前播放音频
  const imgSrc = img;

  return (
    <div className={styles['music-player']}>
      <audio ref={audio} src={audioSrc}>
        <track kind="captions" {...props} />
      </audio>

      {/* 扩散的音符特效 */}
      {isPlaying && <MusicalNotes />}

      <div className={`${styles.disk} ${isPlaying ? styles.playing : ''}`}>
        {/* 音乐图片 */}
        <img className={styles.img} src={imgSrc} alt="" />
        {/* 音乐磁盘指针层 */}
        <div className={styles['disk-pointer']} />
        {/* 播放控制器层 */}
        <div className={styles['controllers-wrapper']}>
          <div className={styles.controllers}>
            <StepBackwardOutlined className={styles.controller} title="上一首" onClick={prev} />
            {!isPlaying && (
              <PlayCircleOutlined
                className={`${styles.controller} ${styles['controller-play']}`}
                title="播放"
                onClick={play}
              />
            )}
            {isPlaying && (
              <PauseCircleOutlined
                className={`${styles.controller} ${styles['controller-pause']}`}
                title="暂停"
                onClick={pause}
              />
            )}
            <StepForwardOutlined className={styles.controller} title="下一首" onClick={next} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
