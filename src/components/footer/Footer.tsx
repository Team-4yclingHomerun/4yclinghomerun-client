import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

import Dropdown from './Dropdown';
import footerImg from '@/assets/home/footer/footer-logo.webp';
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  YOUTUBE_URL,
  NAVERTV_URL,
} from '@/constants/constant';
import { TermsOfServiceData } from '@/mocks/home/TermsOfServiceData';
import FooterModal from './FooterModal';

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-row items-start justify-between gap-10">
          <img src={footerImg} alt="kt wiz logo" className="h-12" />

          <div className="flex flex-col">
            <nav className="flex flex-wrap space-x-6 text-base">
              {TermsOfServiceData.map((data, index) => (
                <FooterModal
                  key={index}
                  title={data.title}
                  subTitle={data.subTitle}
                  content={data.content}
                  buttonText={data.text}
                />
              ))}
            </nav>

            <div className="pt-8">
              <div className="flex flex-col items-center justify-between">
                <div className="space-y-4 text-sm">
                  <table className="w-full space-x-4 text-sm">
                    <tbody>
                      <tr>
                        <td className="w-20 text-gray-400">대표번호</td>
                        <td className="font-extrabold text-gray-700">
                          1899-5916
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="break-keep font-light text-gray-400">
                          (운영시간: 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작
                          전까지, 월요일 및 주말 미경기 시 미운영)
                        </td>
                      </tr>
                      <tr className="h-4"></tr>
                      <tr>
                        <td className="w-20 text-gray-400">주소</td>
                        <td className="font-extrabold text-gray-700">
                          경기도 수원시 장안구 경수대로 (조원동) 수원 케이티
                          위즈파크
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="font-light text-gray-400">
                    Copyright 2024 kt sports. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <Dropdown />
            <div className="flex space-x-4">
              <Link
                to={INSTAGRAM_URL}
                className="text-red-400 hover:text-red-500"
              >
                <div className="rounded-lg border-2 border-gray-400 p-2 transition-all duration-300 hover:bg-gray-100">
                  <FaInstagram size={28} />
                </div>
              </Link>
              <Link
                to={FACEBOOK_URL}
                className="text-blue-500 hover:text-blue-600"
              >
                <div className="rounded-lg border-2 border-gray-400 p-2 transition-all duration-300 hover:bg-gray-100">
                  <FaFacebookF size={28} />
                </div>
              </Link>
              <Link
                to={YOUTUBE_URL}
                className="text-red-500 hover:text-red-600"
              >
                <div className="rounded-lg border-2 border-gray-400 p-2 transition-all duration-300 hover:bg-gray-100">
                  <FaYoutube size={28} />
                </div>
              </Link>
              <Link
                to={NAVERTV_URL}
                className="text-green-600 hover:text-green-700"
              >
                <div className="rounded-lg border-2 border-gray-400 p-2 transition-all duration-300 hover:bg-gray-100">
                  <SiNaver size={28} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
