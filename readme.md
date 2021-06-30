# Cutting mp3 file in a certain second

## How to use

1. install [NodeJS](https://nodejs.org/en/) and package

```
yarn install
```

2. put all your mp3 file in `./origin`

3. start to cut the origin file

```
yarn start
```

4. done
   ex) `./origin/my-audio.mp3` ->  
   `./export/my-audio/my-audio-01.mp3`,  
   `./export/my-audio/my-audio-02.mp3`,  
   `./export/my-audio/my-audio-03.mp3`,  
   `./export/my-audio/my-audio-04.mp3`,  
   `./export/my-audio/my-audio-05.mp3` ...

- default will cut the audio in 10 second.  
   if you want to customize the exported time, change the time in `index.js` `const SPLIT_TIME = 10;`

- Exported audios will exactly `const SPLIT_TIME = 10;` second  
   so there will be some abandons at end of the audio

### using package

- mp3-cutter
- mp3-duration
