const block = document.querySelectorAll('.bars');
// console.log(block);
for (let i = 0; i < 6; i++) {
    let ran = Math.floor(Math.random() * 100);
    block[i].innerHTML = ran;
    block[i].style.height = (ran * 3) + "px";
    // console.log("height " + block[i].style.height);
}

const bubble = async () => {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6 - i - 1; j++) {
            block[j].style.backgroundColor = 'yellow';
            block[j + 1].style.backgroundColor = 'yellow';
            let x1 = block[j];
            let x2 = block[j + 1];
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 3000)
            );
            if (parseInt(x1.innerHTML) > parseInt(x2.innerHTML)) {
                console.log(true);
                let temp = x1.innerHTML;
                x1.innerHTML = x2.innerHTML;
                x2.innerHTML = temp;

                let htemp = block[j].style.height;
                console.log(htemp);
                block[j].style.height = block[j + 1].style.height;
                block[j + 1].style.height = htemp;

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 3500)
                );
            }
            let blocks = document.querySelectorAll('.bars');
            blocks[j].style.backgroundColor = 'red';
        }
        block[0].style.backgroundColor = 'yellow';
        block[6 - i - 1].style.backgroundColor = 'green';
    }
}


const run = () => {
    bubble();
}