//todo: show detailed information on profile mouse hover

async function fetchAsync (url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

// snakbar function
let snakbar = document.querySelector("#snakbar")
let snakbarContent = snakbar.querySelector("#snakbar-content")
let snakbarCount = 0
function showSnakbar(message) {
    snakbar.classList.add("open")
    snakbarContent.textContent = message
    let nowCount = ++snakbarCount
    setTimeout(()=>{
        if (nowCount == snakbarCount) {
            snakbar.classList.remove("open")
        }
    },4000)
}

// show emoticons on your birthday
let date = new Date()
if (date.getMonth() == 10 && date.getDate() == 4) {
    document.querySelectorAll("#birthday-effect-icon-holder").forEach((item) => {
        item.classList.add("enabled")
    })
    document.querySelector("#birthday-effect-canvas").classList.add("enabled")
}

// determine the age
document.querySelector("#profile-ages").textContent = date.getFullYear() - 2007 + " (born in 2007)"

// close button...?
document.querySelector("#titlebar-icon-1").addEventListener("click",()=>{
    window.close()
})

// setting the Discord state
const userId = "650757995378114581"
let discordName = false
async function discordMain() {
    let discordData = (await fetchAsync(`https://api.lanyard.rest/v1/users/${userId}`))?.data
    // console.log(discordData)
    if (discordData) {
      // situation
        document.querySelector("#profile-picture-status").setAttribute("status",discordData.discord_status)

        let user = discordData.discord_user
        if (user) {
      // profile
            let avatar = user.avatar
            document.querySelector("#profile-picture").setAttribute("src",
                `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${avatar.startsWith("a_") ? "gif" : "png"}?size=2048`
            )

            document.querySelector("#profile-name-aka").textContent = ` (aka ${user.username})`

            discordName = `${user.username}#${user.discriminator}`
            document.querySelector("#discord-button").addEventListener('click',()=>{
                navigator.clipboard.writeText(discordName)
                showSnakbar("클립보드에 복사되었습니다!")
            })
            // document.querySelector.addEventListener('mouseover', (event) => {});
        }
    }
}
discordMain()

// easter egg?
let count = localStorage.getItem("titlebar-check-count") || 0
document.querySelector("#titlebar-title").addEventListener("click",()=>{
    localStorage.setItem("titlebar-check-count",++count)
    if (count == 1) {
        showSnakbar("눌러도 아무것도 없어요")
    } else if (count == 10) {
        showSnakbar("왜 눌러요?")
    } else if (count == 20) {
        showSnakbar("거참 아무것도 없다니까요")
    } else if (count == 30) {
        showSnakbar("말을 믿을 수 없는건가요오...?")
    } else if (count == 40) {
        showSnakbar("슬슬 질릴꺼 같은데")
    } else if (count == 50) {
        showSnakbar("이거 재미있는거 맞죠?")
    } else if (count == 60) {
        showSnakbar("흠... 언제까지 누르실꺼에요")
    } else if (count == 70) {
        showSnakbar("벌써 70 번이나 누르셨는데...")
    } else if (count == 80) {
        showSnakbar("어디까지 가나 봅시당👾")
    } else if (count == 90) {
        showSnakbar("좀만 더하면 백번이에요!")
    } else if (count == 100) {
        showSnakbar("정말 대단해요 100 번을 누르셨어요")
    } else if (count == 110) {
        showSnakbar("달성할만한거 다 달성하신거 같은데")
    } else if (count == 120) {
        showSnakbar("언제까지 누르실꺼죵 ㅋㅋㅋㅋㅋ")
    } else if (count == 200) {
        showSnakbar("오 여기까지 왔네요?")
    } else if (count == 210) {
        showSnakbar("말 안하면 갈 줄 알았지...")
    } else if (count == 220) {
        showSnakbar("나 이제 이거 쓰는거 힘들어요")
    } else if (count == 230) {
        showSnakbar("그.. 그만해애")
    } else if (count == 250) {
        showSnakbar("손 안아파요?")
    } else if (count == 260) {
        showSnakbar("난 손아픈데...")
    } else if (count == 270) {
        showSnakbar("진짜 if 문을 몇개쓰는거지")
    } else if (count == 280) {
        showSnakbar("스위치문 쓸까...")
    } else if (count == 290) {
        showSnakbar("이미 파버린 무덤")
    } else if (count == 300) {
        showSnakbar("끝까지 if 로 밀고가죠!")
    } else if (count == 320) {
        showSnakbar("근데 있잖아요")
    } else if (count == 330) {
        showSnakbar("시간이 남아도나요?")
    } else if (count == 340) {
        showSnakbar("이런 쓸모없는거나 보고 있고")
    } else if (count == 350) {
        showSnakbar("점점 졸린데... 밤 새서")
    } else if (count == 360) {
        showSnakbar("잠시 자다 올까요?")
    } else if (count == 370) {
        showSnakbar("아무래도 그래야겠네요")
    } else if (count == 380) {
        showSnakbar("좀이따 올깨요...")
    } else if (count == 500) {
        showSnakbar("아니 진짜 안가요??")
    } else if (count == 510) {
        showSnakbar("밥먹으로 감여")
    } else if (count == 600) {
        showSnakbar("와 ㅋㅋㅋㅋ 아직도 남아있네")
    } else if (count == 610) {
        showSnakbar("무슨짓인지 모르겠네요")
    } else if (count == 620) {
        showSnakbar("이거도 광기인거 아시죠?")
    } else if (count == 630) {
        showSnakbar("뭐 아니라면 그냥 궁금한거겠지")
    } else if (count == 700) {
        showSnakbar("음 여기까지 온거보면 순진하진 않네요")
    } else if (count == 710) {
        showSnakbar("벌써 710 번이나 눌렀어요")
    } else if (count == 720) {
        showSnakbar("끝을 보겠다는건가요")
    } else if (count == 800) {
        showSnakbar("그만눌러주세요...")
    } else if (count == 810) {
        showSnakbar("너무 힘들어요...")
    } else if (count == 820) {
        showSnakbar("ㅜㅠㅠㅜㅠㅜㅜㅠ")
    } else if (count == 830) {
        showSnakbar("자꾸 누르면 삐질꺼에요")
    } else if (count == 840) {
        showSnakbar("누르지 마요!!")
    } else if (count == 850) {
        showSnakbar("힝")
    } else if (count == 860) {
        showSnakbar("삐질꺼야...")
    } else if (count == 870) {
        showSnakbar("나 경고했어!!")
    } else if (count == 880) {
        showSnakbar("진짜 마지막이야!!")
    } else if (count == 890) {
        showSnakbar("정말정말 진짜 마지막으로 봐준다!!!!")
    } else if (count == 900) {
        showSnakbar("힝 삐짐")
        document.querySelector("#titlebar-title").style.display = "none"
        localStorage.setItem("titlebar-hidden",true)
    }
})
let last = localStorage.getItem("titlebar-hidden")
if (last && last != 'false') {
    document.querySelector("#titlebar-title").style.display = "none"
}
