<template>
    <div>
        <div class="container mb-5 w-75 text-center">
            <h4 class="mb-5"><u>เกณฑ์การจัดระดับความสำคัญ</u></h4>
            <table id="tasks" class="ui celled compact table">
                <thead>
                    <tr>
                        <th class="th-lavel text-center"><b-icon icon="kanban" scale="1"></b-icon> ระดับความสำคัญ</th>
                        <th class="th-description text-center"><i class="info circle icon"></i>คำอธิบาย</th>
                    </tr>
                </thead>
                <tr>
                    <th class="th-height">สูง</th>
                    <td>ประเด็นที่การควบคุมภายในต้องได้รับการแก้ไขอย่างเร่งด่วน เนื่องจากเป็นการ
                        ควบคุมที่มีความสำคัญสูงตามแบบประเมินความเพียงพอของระบบการควบคุมภายใน
                        แต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่ยังไม่เพียงพอในประเด็นที่สำคัญ
                    </td>
                </tr>
                <tr>
                    <th class="th-moderate">ปานกลาง</th>
                    <td>ประเด็นที่การควบคุมภายในควรได้รับการแก้ไข เนื่องจากเป็นการควบคุมที่สำคัญตาม
                        แนวทางการควบคุมภายในที่ดีแต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่
                        ยังไม่เพียงพอ
                    </td>
                </tr>
                <tr>
                    <th class="th-low">ต่ำ</th>
                    <td>ประเด็นที่การควบคุมภายในมีความเพียงพอตามหลักการควบคุมภายใน ทำให้บริษัท
                        สามารถดำเนินการต่อไปตามปกติแต่ควรต้องได้รับการระวังในกรณีที่การดำเนินงาน
                        ของบริษัทมีการเปลี่ยนแปลงและทำให้ระดับความเสี่ยงของประเด็นนี้สูงขึ้น ผู้รายงาน
                        และติดตามประเด็นนี้ควรเป็นเจ้าของกระบวนการผู้ตรวจสอบภายในหรือผู้บริหารที่
                        เกี่ยวข้อง
                    </td>
                </tr>
                <tr>
                    <th class="th-aic">AIC</th>
                    <td>ระบบการควบคุมภายในที่มีอยู่ในปัจจุบันเพียงพอและมีประสิทธิผล
                        (Appropriate Internal Control)
                    </td>
                </tr>
            </table>
        </div>

        <div class="container">
            <b-row class="mt-5">
                <b-col class="text-center">
                    <h4><u>การควบคุมภายในระดับองค์กร(Entity-Level Controls: ELC)</u></h4>
                </b-col>
            </b-row>

            <div class="form-content">
                <section class="mb-4">
                    <!-- <form action="#"> -->
                    <header v-for="(mainForms, mainIndex) in this.getMainForm" :key="mainForms.id">
                        <div v-if="mainIndex == 17" class="text-center my-5">
                            <h4><u>การควบคุมภายในระดับกระบวนปฏิบัติงาน(Process-Level Controls : PLC)</u></h4>
                        </div>
                        <div class="d-flex mb-4">
                            <b-icon class="vue-icon" v-b-toggle="`collapse-${mainIndex}`"
                                icon="arrow-down-right-square-fill"></b-icon>
                            <h5 class="mr-2">{{ mainIndex + 1 }}. {{ mainForms.title }}</h5>
                            <textarea class="form-control" v-if="mainIndex >= 17" v-model="mainForms.mainTitle"></textarea>

                        </div>
                        <b-collapse v-model="mainForms.isOpen" :id="`collapse-${mainIndex}`" class="mb-5">
                            <div class="container-form p-4" v-for="(subForms, subIndex) in mainForms.subForm"
                                :key="subForms.id">
                                <p class="font-weight-normal">{{ getSubIndex(mainIndex, subIndex) }} {{ subForms.title
                                }}</p>

                                <textarea class="form-control" v-if="mainIndex >= 17"
                                    v-model="subForms.subTitle"></textarea>
                                <div class="form-group">
                                    <label>ระดับความสำคัญ</label>
                                    <div class="d-flex">
                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex" v-model="subForms.heightValue"
                                            value="1" @change="subForms.heightValue = $event.target.value">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Height</label>

                                        <input type="radio" :id="'moderate-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex" v-model="subForms.moderateValue"
                                            value="1" @change="subForms.moderateValue = $event.target.value">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Moderate</label>

                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex" v-model="subForms.lowValue"
                                            value="1" @change="subForms.lowValue = $event.target.value">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Low</label>

                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex" v-model="subForms.aicValue"
                                            value="1" @change="subForms.aicValue = $event.target.value">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">AIC</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>กลุ่ม</label>
                                    <select class="custom-select" v-model="subForms.selected">
                                        <option v-for="(option, index) in subForms.options" :key="index" :value="option">{{
                                            option }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>การดำเนินการในปัจจุบัน</label>
                                    <textarea rows="4" class="form-control" v-model="subForms.operation"></textarea>
                                </div>
                            </div>
                            <div class="text-right mt-2">
                                <button class="btn btn-info mr-1" @click.prevent="addSubForm(mainIndex)">เพิ่ม</button>
                                <button class="btn btn-danger" @click.prevent="deleteSubForm(mainIndex)">ลบ</button>
                            </div>
                        </b-collapse>
                    </header>
                    <b-row>
                        <b-col>
                            <button class="btn btn-info mr-1" @click.prevent="addMainForm()">เพิ่มรายการ</button>
                            <button class="btn btn-danger" @click.prevent="deleteMainForm()">ลบ</button>
                        </b-col>
                        <!-- <b-col class="text-right">
                                <button class="btn btn-primary px-5" @click.prevent="formSubmit()">บันทึก</button>
                            </b-col> -->
                    </b-row>
                    <!-- </form> -->
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
export default {
    name: 'form-1',

    data() {
        return {
            getMainForm: [],
            getSubForm: [],
            // subForms: {
            //     selected: '',
            //     operation: '',
            //     heightValue: '',
            //     moderateValue: '',
            //     lowValue: '',
            //     aicValue: '',
            // },
            mainTitle: '',
            subTitle: '',
            formData: []
        }
    },


    async mounted() {
        const getApi = await api.gettasks();
        const getFormDefault = getApi.formDefaultTasks[0]
        this.getMainForm = getFormDefault.mainForm;

        // this.getSubForm = getFormDefault.mainForm[0].subForm;

        this.getMainForm.forEach((mainForms) => {
            const formTitle1 = mainForms.mainTitle ? mainForms.title + mainForms.mainTitle : mainForms.title;
            this.forms.mainForm.title = formTitle1;

            mainForms.subForm.forEach((subForms) => {
                const formTitle2 = subForms.subTitle ? subForms.title + subForms.subTitle : subForms.title;
                this.forms.mainForm.subForm.title = formTitle2
            })
        });
    },

    props: ['forms'],


    methods: {
        getSubIndex(mainIndex, subIndex) {
            return (mainIndex + 1) + '.' + (subIndex + 1);
        },
        onRadioChange() {

        },
        formSubmit() {
            this.getMainForm.forEach((mainForms) => {
                const formTitle1 = mainForms.mainTitle ? mainForms.title + mainForms.mainTitle : mainForms.title;

                mainForms.subForm.forEach((subForms) => {
                    const formTitle2 = subForms.subTitle ? subForms.title + subForms.subTitle : subForms.title;
                    const data = {
                        formTitle1,
                        formTitle2,
                        heightValue: subForms.heightValue,
                        moderateValue: subForms.moderateValue,
                        lowValue: subForms.lowValue,
                        aicValue: subForms.aicValue,
                        selected: subForms.selected,
                        operation: subForms.operation,
                    };
                    this.formData.push(data);
                });
            });
            this.$emit('submit', this.formData);
        },
        addMainForm() {
            this.getMainForm.push({
                title: "",
                isOpen: false,
                subForm: [
                    {
                        title: "",
                        heightValue: "",
                        moderateValue: "",
                        lowValue: "",
                        aicValue: "",
                        selected: 'Board of Directors',
                        options: ['Board of Directors', 'Management', 'Operation'],
                        operation: ""
                    }
                ]
            });
        },
        addSubForm(mainIndex) {
            this.getMainForm[mainIndex].subForm.push({
                id: this.getMainForm[mainIndex].subForm.length + 1,
                title: '',
                heightValue: '',
                moderateValue: '',
                lowValue: '',
                aicValue: '',
                selected: 'Board of Directors',
                options: ['Board of Directors', 'Management', 'Operation'],
                operation: ''
            });
        },
        deleteMainForm(event) {
            if (confirm('คุณแน่ใจรึเปล่าที่จะลบ !')) {
                this.getMainForm.splice(this.getMainForm.indexOf(event), 1);
            }
        },
        deleteSubForm(subIndex, event) {
            if (confirm('คุณแน่ใจรึเปล่าที่จะลบ !')) {
                this.getMainForm[subIndex].subForm.splice(this.getMainForm[subIndex].subForm.indexOf(event), 1);
            }
        },
    },
} 
</script>