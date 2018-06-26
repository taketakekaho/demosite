      function onAIFAQBotClick() {
        BotChat.App({
          directLine: { secret: 'B-8NpH0QpPo.cwA.LtE.xytSpYGzUl7E6RfqfG36KgVz5YYrauxhnYIoLpdGGcQ' },
          user: { id: 'あなた' },
          bot: { id: 'FT-AIBOT9' },
          resize: 'detect'
        }, document.getElementById("FTAIBot"));
        document.getElementById("FTAIBot").style.visibility = "visible";
        document.getElementsByClassName("wc-header")[0].textContent = 'FAQ-BOT';
        document.getElementsByClassName("wc-header")[0].onclick = function () {
          document.getElementById("FTAIBotBT").style.visibility = "visible";
          document.getElementById("FTAIBot").style.visibility = "hidden";
        }
        document.getElementById("FTAIBotBT").style.visibility = "hidden";
      }

