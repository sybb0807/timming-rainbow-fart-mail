const nodemailer = require("nodemailer");
const { default: Axios } = require("axios");
const schedule = require("node-schedule");

async function sendMail() {
  const SENDER_MAIL = process.env.SENDER_MAIL;
  const ACCEPT_MAIL = process.env.ACCEPT_MAIL;
  const PASS_KEY = process.env.PASS_KEY;
  const NICKNAME = process.env.NICKNAME;
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
      user: SENDER_MAIL,
      pass: PASS_KEY,
    },
  });

  const response = await getRainbowFartText();
  const today = getToday()

  let info = await transporter.sendMail({
    from: '"'+NICKNAME+'" <' + SENDER_MAIL + ">",
    to: ACCEPT_MAIL,
    subject: `火火的每日问候---${today}`,
    text: response.data,
    html: "♥♥♥♥♥♥♥♥♥♥♥♥<br/><b>" + response.data + "</b>",
  });
}

async function getRainbowFartText() {
  var url = "https://chp.shadiao.app/api.php";
  return Axios.get(url);
}

function getToday() { 
  const date = new Date();
  var y = date.getFullYear();  
  var m = date.getMonth() + 1;  
  m = m < 10 ? '0' + m : m;  
  var d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  return y + '-' + m + '-' + d;  
}


const  scheduleSendEmail = ()=>{
    schedule.scheduleJob({ hour: 9, minute: 30 }, function () {
      sendMail();
    });
}

scheduleSendEmail();
