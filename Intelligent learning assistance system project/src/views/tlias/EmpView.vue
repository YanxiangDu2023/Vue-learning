<template>
    <div>

<el-container style="height: 500px; border: 1px solid #eee">
  <el-header style = "font-size: 40px; background-color: rgb(238,241,246);">Intelligent learning assistance system</el-header>
<el-container>
    <el-aside width="200px" style = "border: 1px solid #eee">
        <!-- 边框线 -->
        <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>System Information Management</template>
      
        
          <el-menu-item index="1-1">Department Management</el-menu-item>
          <el-menu-item index="1-2">Employee Management</el-menu-item>
      
     
      </el-submenu>
    </el-menu>
    </el-aside>
  
    
    <el-main>
        <!-- 表单 -->
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
  <el-form-item label="Name">
    <el-input v-model="searchForm.name" placeholder="Name"></el-input>
  </el-form-item>

  <el-form-item label="Gender">
    <el-select v-model="searchForm.gender" placeholder="Gender">
      <el-option label="Male" value="1"></el-option>
      <el-option label="Female" value="2"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="Entrydate">
    <!-- 日期选择器 -->
    <el-date-picker
      v-model="searchForm.entrydate"
      type="daterange"
      range-separator="to"
      start-placeholder="Start Date"
      end-placeholder="End Date">
    </el-date-picker>
    
  </el-form-item>





  <el-form-item>
    <el-button type="primary" @click="onSubmit">Search</el-button>
  </el-form-item>
</el-form>



        <!-- 表格 -->
      <el-table :data="tableData" border>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>

      <el-table-column prop="image" label="Image" width="180">
        <template slot-scope="scope">
       
        <img :src = "scope.row.image" width = "100px" heigth = "70px">
      </template>
      </el-table-column>


      <el-table-column prop="gender" label="Gender" width="140">
      
      <template slot-scope="scope">
      {{ scope.row.Gender == 1 ? "Male":"Female"}}
      </template>

    </el-table-column>






      <el-table-column prop="job" label="Job" width="140"></el-table-column>
      <el-table-column prop="entrydate" label="Entrydate" width="180"></el-table-column>
      <el-table-column prop="updatetime" label="Updatetime" width="230"></el-table-column>
      <el-table-column label="操作" >
    <el-button type="primary" size="mini">编辑</el-button>
    <el-button type="danger" size="mini">删除</el-button>
</el-table-column>
      </el-table>

      <!-- 分页条 -->
       <br>
    
      <el-pagination
  background
  layout="prev, pager, next"
  @size-change = "handleCurrentChange"
  @current-change = "handleCurrentChange"
  :total="1000">
</el-pagination>




       
    </el-main>
  </el-container>
</el-container>

        
   
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableData: [],
            searchForm: {
               name:"",
               gender:"",
               entrydate:[]
            //    开始时间和结束时间
            }
        }
    },
    methods: {
        onSubmit:function(){
            alert("Search Data");
        },
        handleSizeChange:function(val){
            alert("每页记录数变化" + val)
        },
        handleCurrentChange:function(val){
            alert("页码发生变化" + val)
        }
    },
    mounted () {
        //发送异步请求,获取数据
        axios.get("https://mock.apifox.cn/m1/3128855-0-default/emp/list").then((result) => {
            this.tableData = result.data.data;  
        });
    }
}
</script>

<style>

</style>