/* eslint-disable react/no-danger */
import React from 'react';
import styles from './index.module.less';
import { getRandomInteger } from '@/utils/random';

function MusicalNotes() {
  // 随机生成若干音符，每个音符与圆心位置相背的方向位移
  const notes = [];
  const count = 15;
  for (let i = 0; i < count; i += 1) {
    notes.push({
      key: i,
      hasTail: getRandomInteger(0, 1),
      left: getRandomInteger(-25, 25),
      top: getRandomInteger(-25, 25),
      fontSize: getRandomInteger(12, 14),
    });
  }

  return (
    <div className={styles.notes}>
      {notes.map((note) => {
        const animationName = `play-music-${note.key}`;
        const translateX = note.left;
        const translateY = note.top;
        const animationDuration = getRandomInteger(2, 6);
        const animationDelay = getRandomInteger(0, 2);
        const r = getRandomInteger(100, 200);
        const g = getRandomInteger(100, 200);
        const b = getRandomInteger(100, 200);
        return (
          <span
            key={note.key}
            className={styles.note}
            style={{
              left: note.left,
              top: note.top,
              fontSize: note.fontSize,
              animation: `${animationName} ${animationDuration}s ease-in-out ${animationDelay}s infinite`,
              color: `rgb(${r}, ${g}, ${b})`,
            }}
          >
            {/* eslint-disable-next-line react/no-danger */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
              @keyframes ${animationName} {
                0% {
                  transform: translate(0) rotate(0);
                  opacity: 1;
                }
                100% {
                  transform: translate(${getRandomInteger(1, 2) * translateX}px, ${
                  getRandomInteger(1, 2) * translateY
                }px) rotate(360deg);
                  opacity: 0;
                }
              };`,
              }}
            />
            {note.hasTail ? '♪' : '♩'}
          </span>
        );
      })}
    </div>
  );
}

export default MusicalNotes;
