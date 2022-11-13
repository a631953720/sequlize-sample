cd src

npx sequelize-cli model:generate --name User\
--attributes Name:string,Password:string,Alias:string

npx sequelize-cli model:generate --name UserAuth \
--attributes userId:number,Token:string,RefreshToken:string,LastLoginAt:date,TokenExpiredAt:date