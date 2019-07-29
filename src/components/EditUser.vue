<template>
  <div>
    <el-row class="rowLineTop">
      <el-col :span="12" align="left">编辑用户</el-col>
    </el-row>
    <br />
    <el-row class="rowLineCenter">
      <el-col :span="12" align="left">基本信息</el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        归属机构：
        <el-input size="small" class="inputTop" v-model="rowData.institution">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        &emsp;&emsp;归属公司：
        <el-input size="small" class="inputTop" v-model="rowData.company">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        登录账号：
        <el-input size="small" class="inputTop" v-model="rowData.loginName"></el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        &emsp;&emsp;用户昵称：
        <el-input size="small" class="inputTop" v-model="rowData.nickName">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        电子邮箱：
        <el-input size="small" class="inputTop" v-model="rowData.email" suffix-icon="el-icon-date">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        &emsp;&emsp;手机号码：
        <el-input size="small" class="inputTop" v-model="rowData.tel">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        办公电话：
        <el-input size="small" class="inputTop" v-model="rowData.workTel">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        权重（排序）：
        <el-input size="small" class="inputTop" v-model="rowData.id">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />

    <el-row class="rowLineTop">
      <el-col :span="12" align="left" >详细信息</el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        员工编号：
        <el-input size="small" class="inputTop" v-model="rowData.id">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        &emsp;&emsp;员工姓名：
        <el-input size="small" class="inputTop" v-model="rowData.userName">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        所属岗位：
        <el-input size="small" class="inputTop" v-model="rowData.institution"></el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        &emsp;&emsp;&emsp;英文名：
        <el-input size="small" class="inputTop" v-model="rowData.institution">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="10" :offset="1">
        办公电话：
        <el-input size="small" class="inputTop" v-model="rowData.workTel">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        权重（排序）：
        <el-input size="small" class="inputTop" v-model="rowData.institution">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "EditUser",
  data() {
    return {
      rowData: {
        id: "",
        loginName: "",
        nickName: "",
        userName: "",
        institution: "",
        company: "",
        email: "",
        tel: "",
        workTel: "",
        updateTime: "",
        status: ""
      }
    };
  },
  methods: {},
  created() {
    var rowData = this.$route.params.rowData;
    //alert(JSON.stringify(rowData));
    this.rowData = rowData;
  }
};
</script>

<style>
body{
  background-color: white;
  width: 90%;
  position:  absolute;
  left: 5%;
}
.rowLineTop {
  border-bottom: gray 1px solid;
}
.rowLineCenter {
  border-bottom: gray 1px solid;
  color: blue;
}
.inputTop {
  width: 400px;
}
</style>

