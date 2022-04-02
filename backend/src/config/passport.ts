import passport from "passport";
import passportJwt, { ExtractJwt } from "passport-jwt";
import * as passportLocal from "passport-local";
import bcrypt from "bcrypt";
import { dataSource } from "./typeorm";
import { User } from "../entity/User.entity";

const JWTStrategy = passportJwt.Strategy;
const localStrategy = passportLocal.Strategy;
const userRepository = dataSource.getRepository(User);

const LocalStrategyOptions: {
    usernameField?: string | undefined;
    passwordField?: string | undefined;
} = {
    usernameField: "id",
    passwordField: "password",
};

const jwtStrategyOptions: { jwtFromRequest: any; secretOrKey: any } = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

const localVerify = async ({
    username,
    password,
    done,
}: {
    username: string;
    password: string;
    done: (error: any, user?: any, options?: any) => void;
}) => {
    try {
        const user: any = await userRepository.find({
            where: {
                email: username,
            },
        });

        if (!user) {
            return done(null, false);
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return done(null, false);
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
};

const jwtVerify = async ({ payload, done }: { payload: any; done: any }) => {
    try {
        const user: any = await userRepository.find({
            where: {
                email: payload.id,
            },
        });

        if (!user) {
            return done(null, false);
        } else {
            return done(null, user);
        }
    } catch (error) {
        return done(error);
    }
};

export default () => {
    passport.use(new localStrategy(LocalStrategyOptions, localVerify));
    passport.use(new JWTStrategy(jwtStrategyOptions, jwtVerify));
};

/*
No overload matches this call.
이 콜에 일치하는 과부하는 없습니다.

  Overload 1 of 3, '(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): Strategy', gave the following error.
  오버로드 1/3, '(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): Strategy'는 다음 오류를 발생시켰습니다.

    Argument of type '{ usernameField: string; passwordField: string; session: boolean; passReqToCallback: boolean; }' is not assignable to parameter of type 'IStrategyOptionsWithRequest'.
    '{usernameField: string; passwordField: string; session: boolean; passReqToCallback: boolean; }' 형식의 인수는 ' 유형의 매개 변수에 할당할 수 없습니다.IStrategy 옵션With Request'를 클릭합니다.

      Types of property 'passReqToCallback' are incompatible.
      속성 유형 'passReqToCallback'이 호환되지 않습니다.

        Type 'boolean' is not assignable to type 'true'.
        'boolean' 유형은 'true' 유형에 할당할 수 없습니다.

  Overload 2 of 3, '(options: IStrategyOptions, verify: VerifyFunction): Strategy', gave the following error.
  오버로드 2/3, '(options: IStrategyOptions, verify: VerifyFunction): Strategy'는 다음 오류를 발생시켰습니다.

    Argument of type '{ usernameField: string; passwordField: string; session: boolean; passReqToCallback: boolean; }' is not assignable to parameter of type 'IStrategyOptions'.
    '{usernameField: string; passwordField: string; session: boolean; passReqToCallback: boolean; }' 형식의 인수는 ' 유형의 매개 변수에 할당할 수 없습니다.IStrategyOptions'를 참조해 주세요.

      Types of property 'passReqToCallback' are incompatible.
      속성 유형 'passReqToCallback'이 호환되지 않습니다.

        Type 'boolean' is not assignable to type 'false | undefined'.ts(2769)
        유형 'boolean'은 유형 'false | undefined'에 할당할 수 없습니다.ts(2769)"
*/
