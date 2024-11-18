import { z } from 'zod';

const defaultValues = {
  email: '',
  nickname: '',
  username: '',
  password: '',
  passwordConfirm: '',
};

const SignupFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email({ message: '이메일 형식이 올바르지 않습니다.' }),
    nickname: z
      .string()
      .min(3, { message: '닉네임은 3자 이상 입력해주세요.' })
      .max(10, { message: '닉네임은 10자 이하로 입력해주세요.' }),
    username: z
      .string()
      .min(3, { message: '아이디는 3자 이상 입력해주세요.' })
      .max(10, { message: '아이디는 10자 이하로 입력해주세요.' })
      .regex(/^[a-z0-9]+$/, {
        message: '아이디는 영문 소문자와 숫자만 입력해주세요.',
      }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상 입력해주세요.' })
      .max(16, { message: '비밀번호는 16자 이하로 입력해주세요.' })
      .regex(/^[a-zA-Z0-9!@#$%^&*]*$/, {
        message:
          '비밀번호는 영문 대소문자, 숫자, 특수문자(!, @, #, $, %, ^, &, *)를 포함해야만 합니다.',
      }),
    passwordConfirm: z
      .string()
      .min(8, { message: '비밀번호를 다시 확인해주세요.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export { defaultValues, SignupFormSchema };
