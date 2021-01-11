let timer = 300;
const actions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   '];
for(const action of actions){
  setTimeout(() => {
    process.stdout.write(action); 
  }, timer);
  timer += 200;
};

