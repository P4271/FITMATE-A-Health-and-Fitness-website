<!DOCTYPE html>
<html>
    <head>
        <title>
        NUTRITION FOOD DETAILS
        </title>
        <link rel="stylesheet" type="text/css" href="url('tool/css/bootstrap.css');">
<link rel="stylesheet" type="text/css" href="url('tool/css/style.css');">
<script type="text/javascript" src="url('tool/js/bootstrap.js');"></script>
<script type="text/javascript" src="url('tool/js/jquery-3.2.1.min.js');"></script>
<style>
    .content-table
{
    border-collapse: collapse;
    margin: 50px 0;
font-size: 0.8em;
min-width: 400 px;
border-radius:5px 5px 0 0;
    overflow: hidden;
border-color:black;
}
.content-table{
    background-color: aqua;
    text-align: left;
    font-weight: bold;

    }
.content-table th,
.content-table td{
    padding:12px 15px;
}
 .content-table tbody tr{
     border-bottom:1px solid #f3f3f3;

 }
 content-table thead{
     border-bottom:1px solid #f3f3f3;

 }


 .content-table tbody tr:nth-of-type(even)
 {
     background-color:#f3f3f3 ;

 }
 .content-table tbody tr:last-of-type
 {
     border-bottom:2px solid;
 }

</style>
   <link rel="stylesheet" type="text/css" href="food3.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card mt-4">
                    <div class="card-header">
<br>
<br>
<br>
<br>
<br>
<br>
<div class="card-body">
    <div class="row">
        <div class="col-md-7">
            <form action="" method="GET">
                <div class="input-group mb-3">
<center>
<input type="text" name="search" value="<?php if(isset($_GET['search'])){echo $_GET['search'];}?>" placeholder="SEARCH" class="form-control"></td>
<button onClick="myOnclickFn()" value="Search" class="btn btn-primary">SEARCH</button>
<script>function myOnclickFn()
{
    document.loaction.href="mainpage5.html";
}
</script>
</center>

</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
<br>
<div class="col-md-12">
    <div class="card mt-4">
        <div class="card-body">
            <center>
            <table class="content-table">
                <thead>
                    <tr>
                  <th>  name</th><th>	serving_size</th><th>	calories</th>	<th>total_fat	</th><tH>saturated_fat</th><th>	cholesterol	</th>
                  <th>sodium</th><th>	choline</th>	<th>folate</th><th>	folic_acid</th><th>	niacin</th><th>	pantothenic_acid</th>
                  <th>	riboflavin	</th><th>thiamin</th><th>	vitamin_a	</th><th>vitamin_a_rae</th><th>	carotene_alpha</th>
                  <th>	carotene_beta</th><th>	cryptoxanthin_beta</th><th>	lutein_zeaxanthin	</th><th>lucopene</th>
</thead>
<tbody>
    <?php 
    $con =mysqli_connect("localhost","root","","food");
    if (isset($_GET['search']))
    {
        $filtervalues=$_GET['search'];
        $query="SELECT * FROM users WHERE CONCAT(name,	serving_size,	calories,	total_fat	,saturated_fat,	cholesterol,	sodium,
        	choline,	folate,	folic_acid	,niacin	,pantothenic_acid,	riboflavin,	thiamin	,vitamin_a,	vitamin_a_rae,	carotene_alpha,
            	carotene_beta,	cryptoxanthin_beta	,lutein_zeaxanthin,	lucopene
        ) LIKE '%$filtervalues%'";
        $query_run=mysqli_query($con, $query);

        if(mysqli_num_rows($query_run)>0)
{
foreach($query_run as $items)
{
    ?>
    <tr>
   <td><?= $items['name'];?></td>
   <td><?= $items['serving_size'];?></td>
   <td><?= $items['calories'];?></td>
   <td><?= $items['total_fat'];?></td>
   <td><?= $items['saturated_fat'];?></td>
   <td><?= $items['cholesterol'];?></td>
   <td><?= $items['sodium'];?></td>
   <td><?= $items['choline'];?></td>
   <td><?= $items['folate'];?></td>
   <td><?= $items['folic_acid'];?></td>
   <td><?= $items['niacin'];?></td>
   <td><?= $items['pantothenic_acid'];?></td>
   <td><?= $items['riboflavin'];?></td>
   <td><?= $items['thiamin'];?></td>
   <td><?= $items['vitamin_a'];?></td>
   <td><?= $items['vitamin_a_rae'];?></td>
   <td><?= $items['carotene_alpha'];?></td>
   <td><?= $items['carotene_beta'];?></td>
   <td><?= $items['cryptoxanthin_beta'];?></td>
   <td><?= $items['lutein_zeaxanthin'];?></td>
   <td><?= $items['lucopene'];?></td>


</tr>

   <?php

}
}
else{
    ?>
     <tr>
    <td colspan="4">No record found</td>
</tr>

    <?php
}
    

    }
    ?>
   
</tbody>
</table>
</center>
</div>
</div>
</div>
</div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</body>
</html>