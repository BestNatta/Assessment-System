<template>
    <div>
        <div class="container">

            <!-- 10. -->
            <section class="mb-4">
                <header class="d-flex">
                    <b-icon class="vue-icon" v-b-toggle.collapse-10 icon="arrow-down-right-square-fill"></b-icon>
                    <p>10. องค์กรมีมาตรการควบคุมที่ช่วยลดความเสี่ยงที่จะไม่บรรลุวัตถุประสงค์ขององค์กร
                        ให้อยู่ในระดับที่ยอมรับได้</p>
                </header>
                <b-collapse id="collapse-10" class="mt-2">
                    <div class="container-form">
                        <!-----------10.1---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.1</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">มาตรการควบคุมของบริษัทมีความเหมาะสมกับความเสี่ยง
                                        และลักษณะเฉพาะขององค์กร เช่น สภาพแวดล้อม ความซับซ้อนของงาน ลักษณะงาน
                                        ขอบเขตการดำเนินงาน รวมถึงลักษณะเฉพาะอื่น ๆ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_1.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_1.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_1.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_1.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form10.form10_1.selected"
                                        :options="forms.form10.form10_1.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form10.form10_1.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.2---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.2</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทมีมาตรการควบคุมภายในที่กำหนดเป็นลายลักษณ์อักษร
                                        และครอบคลุมกระบวนการต่างๆ อย่างเหมาะสม เช่น
                                        มีนโยบายและระเบียบวิธีปฏิบัติงานเกี่ยวกับธุรกรรมด้านการเงินการจัดซื้อ
                                        และการบริหารทั่วไป ตลอดจนกำหนดขอบเขต อำนาจหน้าที่
                                        และลำดับชั้นการอนุมัติของผู้บริหารในแต่ละระดับไว้อย่างชัดเจน รัดกุม
                                        เพื่อให้สามารถป้องกันการทุจริตได้ เช่น
                                        มีการกำหนดขนาดวงเงินและอำนาจอนุมัติของผู้บริหารแต่ละระดับ
                                        ขั้นตอนในการอนุมัติโครงการลงทุน ขั้นตอนการจัดซื้อและวิธีการคัดเลือกผู้ขาย
                                        การบันทึกข้อมูลรายละเอียดการตัดสินใจจัดซื้อ ขั้นตอนการเบิกจ่ายวัสดุอุปกรณ์ หรือ
                                        การเบิกใช้เครื่องมือต่างๆ เป็นต้น โดยได้จัดให้มีกระบวนการสำหรับกรณีต่าง ๆ
                                        ดังนี้<br>
                                        • การเก็บรวบรวมข้อมูลเกี่ยวกับผู้ถือหุ้นรายใหญ่ กรรมการ ผู้บริหาร
                                        และผู้ที่เกี่ยวข้องกับบุคคลดังกล่าว รวมทั้งบุคคลที่เกี่ยวโยงกัน
                                        เพื่อประโยชน์ในการติดตามและสอบทานการทำรายการระหว่างกัน
                                        หรือรายการที่อาจมีความขัดแย้งทางผลประโยชน์
                                        รวมทั้งมีการปรับปรุงข้อมูลให้เป็นปัจจุบันเสมอ <br>
                                        •
                                        กรณีที่บริษัทอนุมัติธุรกรรมหรือทำสัญญากับผู้ที่เกี่ยวข้องในลักษณะที่มีผลผูกพันบริษัทในระยะยาวไปแล้ว
                                        เช่น การทำสัญญาซื้อขายสินค้า การให้กู้ยืม การค้ำประกัน
                                        บริษัทได้ติดตามให้มั่นใจแล้วว่า
                                        มีการปฏิบัติเป็นไปตามเงื่อนไขที่ตกลงกันไว้ตลอดระยะเวลาที่มีผลผูกพันบริษัท เช่น
                                        ติดตามการชำระคืนหนี้ตามกำหนด มีการทบทวนความเหมาะสมของสัญญา เป็นต้น
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_2.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_2.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_2.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_2.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form10.form10_2.selected"
                                        :options="forms.form10.form10_2.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form10.form10_2.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.3---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.3</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดให้การควบคุมภายในมีความหลากหลายอย่างเหมาะสม เช่น
                                        การควบคุมแบบ manual และ automated หรือการควบคุมแบบป้องกันและติดตาม</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_3.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_3.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_3.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_3.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form10.form10_3.selected"
                                        :options="forms.form10.form10_3.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form10.form10_3.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.4---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.4</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทกำหนดให้มีการควบคุมภายในในทุกระดับขององค์กร เช่น
                                        ทั้งระดับกลุ่มบริษัท หน่วยธุรกิจ สายงาน ฝ่ายงาน แผนก หรือกระบวนการ</label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_4.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_4.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_4.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_4.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form10.form10_4.selected"
                                        :options="forms.form10.form10_4.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form10.form10_4.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                        <!-----------10.5---------->
                        <b-row class="mt-4 d-flex justify-content-between ">
                            <b class="mb-3">10.5</b>
                            <b-col cols="6">
                                <div class="form-offer">
                                    <label for="">บริษัทมีการแบ่งแยกหน้าที่ความรับผิดชอบในงาน 3 ด้านต่อไปนี้
                                        ออกจากกันโดยเด็ดขาด เพื่อเป็นการตรวจสอบซึ่งกันและกัน กล่าวคือ <br>
                                        (1) หน้าที่อนุมัติ <br>
                                        (2) หน้าที่บันทึกรายการบัญชีและข้อมูลสารสนเทศ <br>
                                        (3) หน้าที่ในการดูแลจัดเก็บทรัพย์สิน
                                    </label>
                                </div>
                                <b-row class="mt-5 d-block px-3">
                                    <b>ระดับความสำคัญ</b>
                                    <div class="title-head-form d-flex">
                                        <div class="con-checkbox">
                                            <label class="container-box">สูง
                                                <input type="checkbox" value="height"
                                                    v-model=forms.form10.form10_5.height :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color1"></span>
                                            </label>
                                            <label class="container-box">ปานกลาง
                                                <input type="checkbox" value="moderate"
                                                    v-model=forms.form10.form10_5.moderate :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color2"></span>
                                            </label>
                                        </div>
                                        <div class="con-checkbox">
                                            <label class="container-box">ต่ำ
                                                <input type="checkbox" value="low" v-model=forms.form10.form10_5.low
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color3"></span>
                                            </label>
                                            <label class="container-box">AIC
                                                <input type="checkbox" value="aic" v-model=forms.form10.form10_5.aic
                                                    :true-value=1 :false-value=0>
                                                <span class="checkmark checkbox-color4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col cols="5">
                                <b-form-selected content-cols="8" label-cols="12">
                                    <b>กลุ่ม</b>
                                    <b-form-select v-model="forms.form10.form10_5.selected"
                                        :options="forms.form10.form10_5.options"></b-form-select>
                                </b-form-selected>
                                <b-row class="mt-5">
                                    <b-col>
                                        <b-form-selected content-cols="12" label-cols="12">
                                            <b>การดำเนินการในปัจจุบัน</b>
                                            <b-form-textarea rows="5"
                                                v-model="forms.form10.form10_5.currentAction"></b-form-textarea>
                                        </b-form-selected>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <hr>
                    </div>
                </b-collapse>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-report4',
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    form10: {
                        form10_1: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Management',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_2: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Management',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_3: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Board of Directors',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_4: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Board of Directors',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                        form10_5: {
                            currentAction: '',
                            height: 0,
                            moderate: 0,
                            low: 0,
                            aic: 0,
                            total: 0,
                            selected: 'Board of Directors',
                            options: [
                                { value: 'Board of Directors', text: 'Board of Directors' },
                                { value: 'Management', text: 'Management' },
                                { value: 'Operation', text: 'Operation' },
                            ],
                        },
                    },
                }
            }
        }
    }
}
</script>