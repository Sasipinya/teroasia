import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "นโยบายความเป็นส่วนตัว | TERO Entertainment",
    description: "นโยบายเกี่ยวกับข้อมูลส่วนบุคคลของบริษัท TERO Entertainment"
}

const Policy = () => {
    return (
        <section id="contact" className="py-8">
            <div className="container mx-auto px-4">
                <div className="text-2xl font-bold mb-6">
                    นโยบายเพื่อความปลอดภัยเกี่ยวกับข้อมูลส่วนบุคคล
                    <span className="text-primary">&nbsp;&nbsp;TERO Entertainment</span>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <nav className="w-full lg:w-1/4 mb-6 lg:mb-0 sticky top-4">
                        <ul className="flex flex-col gap-2">
                            <li><a href="#section1" className="text-blue-600 hover:underline">ข้อ 1. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</a></li>
                            <li><a href="#section2" className="text-blue-600 hover:underline">ข้อ 2. การเก็บรวบรวมข้อมูลส่วนบุคคล</a></li>
                            <li><a href="#section3" className="text-blue-600 hover:underline">ข้อ 3. กรณีที่ผู้ใช้บริการปฏิเสธความยินยอมในการจัดเก็บข้อมูล</a></li>
                            <li><a href="#section4" className="text-blue-600 hover:underline">ข้อ 4. ระยะเวลาในการจัดเก็บข้อมูล</a></li>
                            <li><a href="#section5" className="text-blue-600 hover:underline">ข้อ 5. การยกเลิกหรือเพิกถอนความยินยอม</a></li>
                            <li><a href="#section6" className="text-blue-600 hover:underline">ข้อ 6. การเผยแพร่ข้อมูลส่วนบุคคลของผู้ใช้บริการ</a></li>
                            <li><a href="#section7" className="text-blue-600 hover:underline">ข้อ 7. มาตรการป้องกันและรักษาข้อมูลส่วนบุคคล</a></li>
                            <li><a href="#section8" className="text-blue-600 hover:underline">ข้อ 8. สิทธิของเจ้าของข้อมูลส่วนบุคคล</a></li>
                            <li><a href="#section9" className="text-blue-600 hover:underline">ข้อ 9. การเปลี่ยนแปลงนโยบายเพื่อความปลอดภัยเกี่ยวกับข้อมูลส่วนบุคคล</a></li>
                        </ul>
                    </nav>
                    <div className="w-full lg:w-3/4 lg:pl-8 text-base leading-relaxed">
                        <div id="section1" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 1. วัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
                            <p>เพื่อให้บริษัทสามารถพัฒนาปรับปรุงการให้บริการได้อย่างมีประสิทธิภาพ ถูกต้อง ครบถ้วน รวดเร็ว และน่าเชื่อถือ บริษัทจึงจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคลของท่านบางส่วนเมื่อท่านได้เข้าใช้บริการของบริษัท โดยข้อมูลส่วนบุคคลของท่านจะถูกเก็บรวบรวมและรักษาไว้โดยระบบรักษาความปลอดภัยที่ได้มาตรฐานของบริษัท</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>เพื่อการทำรายการตามวัตถุประสงค์ที่ท่านต้องการ เช่น การเข้าชมเว็บไซต์หรือรับข้อมูลข่าวสาร</li>
                                <li>เพื่อให้ผู้ให้บริการรับทราบสถิติการใช้งานและพัฒนาเว็บไซต์ให้มีประสิทธิภาพมากยิ่งขึ้น</li>
                                <li>เพื่อแจ้งข้อมูลข่าวสารและโปรโมชั่น</li>
                                <li>เพื่อการปฏิบัติตามสัญญาและดำเนินการตามความต้องการของผู้ใช้บริการ</li>
                            </ul>
                        </div>
                        <div id="section2" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 2. การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
                            <p>ผู้ให้บริการจะเก็บรวบรวมข้อมูลส่วนบุคคลจากการลงทะเบียนหรือการติดต่อผ่านช่องทางต่าง ๆ ตัวอย่างข้อมูลเช่น:</p>
                            <ul className="list-decimal list-inside mt-2 ml-4">
                                <li>ชื่อ-นามสกุล</li>
                                <li>วันเดือนปีเกิด</li>
                                <li>เพศ</li>
                                <li>หมายเลขโทรศัพท์</li>
                                <li>ที่อยู่</li>
                                <li>อีเมล</li>
                                <li>ข้อมูลทางการเงินและรายการสั่งซื้อ</li>
                            </ul>
                            <p className="mt-4">ข้อมูลจะถูกรวบรวมตามความจำเป็นและตามวัตถุประสงค์ที่ได้แจ้งไว้เท่านั้น รวมถึงอาจมีการใช้คุกกี้ (Cookies) เพื่อเพิ่มประสิทธิภาพในการให้บริการ</p>
                        </div>
                        <div id="section3" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 3. กรณีที่ผู้ใช้บริการปฏิเสธความยินยอมในการจัดเก็บข้อมูล</h3>
                            <p>หากผู้ใช้บริการไม่ให้ความยินยอมในการจัดเก็บข้อมูล อาจส่งผลให้ไม่สามารถใช้บริการบางอย่างได้ และผู้ให้บริการจะแจ้งให้ทราบในกรณีที่มีผลกระทบดังกล่าว</p>
                        </div>
                        <div id="section4" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 4. ระยะเวลาในการจัดเก็บข้อมูล</h3>
                            <p>ข้อมูลจะถูกจัดเก็บไว้เท่าที่จำเป็นตามวัตถุประสงค์หรือจนกว่าผู้ใช้บริการจะมีการยกเลิกหรือเปลี่ยนแปลงข้อมูลนั้น</p>
                        </div>
                        <div id="section5" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 5. การยกเลิกหรือเพิกถอนความยินยอม</h3>
                            <p>ผู้ใช้บริการสามารถเพิกถอนความยินยอมได้ทุกเมื่อ ผ่านช่องทางอีเมลหรือหมายเลขโทรศัพท์ที่ระบุไว้ในเว็บไซต์ โดยการเพิกถอนอาจมีผลต่อการใช้บริการบางส่วน</p>
                        </div>
                        <div id="section6" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 6. การเผยแพร่ข้อมูลส่วนบุคคลของผู้ใช้บริการ</h3>
                            <p>ข้อมูลส่วนบุคคลอาจถูกเปิดเผยต่อกลุ่มบริษัทในเครือ หรือบุคคลที่ให้บริการด้านกฎหมาย บัญชี ระบบเทคโนโลยี และในกรณีที่มีกฎหมายกำหนด</p>
                        </div>
                        <div id="section7" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 7. มาตรการป้องกันและรักษาข้อมูลส่วนบุคคล</h3>
                            <p>บริษัทมีมาตรการรักษาความปลอดภัย เช่น การเข้ารหัสข้อมูล เพื่อป้องกันไม่ให้เกิดการเข้าถึงข้อมูลโดยมิชอบ</p>
                        </div>
                        <div id="section8" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 8. สิทธิของเจ้าของข้อมูลส่วนบุคคล</h3>
                            <p>ผู้ใช้บริการมีสิทธิในการเข้าถึง แก้ไข ลบ หรือคัดค้านการใช้ข้อมูลส่วนบุคคลของตน และสามารถติดต่อมายังบริษัทเพื่อดำเนินการได้</p>
                        </div>
                        <div id="section9" className="mb-10 text-gray-600">
                            <h3 className="text-xl font-semibold mb-2">ข้อ 9. การเปลี่ยนแปลงนโยบายเพื่อความปลอดภัยเกี่ยวกับข้อมูลส่วนบุคคล</h3>
                            <p>บริษัทขอสงวนสิทธิในการแก้ไขเพิ่มเติมนโยบายฉบับนี้ได้ทุกเวลา โดยจะประกาศผ่านเว็บไซต์หรือช่องทางของบริษัท</p>
                        </div>
                        <div className="my-16" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Policy
