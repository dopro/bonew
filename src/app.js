const config = require("../config");
const Helper = require("../helpers");
const fileSys = config.PATH_SYS_CONFIG;
const serveStatic = require("serve-static");
const path = require("path");
const userRouter = require("./../api/users/user.router");
const tradeRouter = require("./../api/trade/trade.router");
const gameRouter = require("./../api/game/champion/champion.router");
const gameLuckyDrawRouter = require("./../api/game/luckyDraw/luckyDraw.router");
const betRouter = require("./../api/bet/bet.router");
const exChangeRouter = require("./../api/exchange/ex.router");
const Wallet = require("./../api/wallet/wallet.router");

const uploadAvatar = require("./../auth/upload/router");

const payPal = require("./../auth/pay/paypal");
const payVND = require("./../auth/pay/vnd");
const walletSys = require("./../api/sys.router");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/setup", walletSys);

app.use("/api/users", userRouter);
app.use("/api/trades", tradeRouter);
app.use("/api/game", gameRouter);
app.use("/api/game1", gameLuckyDrawRouter);
app.use("/api/bets", betRouter);
app.use("/api/exs", exChangeRouter);
app.use("/api/wallet", Wallet);

app.use("/api/auth", uploadAvatar);

app.use("/api/paypal", payPal);
app.use("/api/pay", payVND);

app.get("/status", (req, res) => {
  let dataSys = Helper.getConfig(fileSys);
  //console.log(dataSys);
  res.json({
    ok: dataSys.maintenance,
    msg: dataSys.maintenanceContent,
  });
});

app.listen(config.PORT_SERVER);
console.log(`- Web start port ${config.PORT_SERVER}`);
