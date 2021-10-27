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

        <link rel="stylesheet" type="text/css" href="food2.css">
    </head>
    <body>
        <nav>
            <ul>
                <a href="food.html"><li>HOME</li></a>
                <a href="WEIGHTGAIN.HTML"><li>WEIGHT GAIN    </li></a>
                <a href="WEIGHTLOSE.HTML"><li>   WEIGHT LOSE    </li></a>
                <a href="AboutUs.php"><li>ABOUT US      </li></a>
            </ul>
        </nav>
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
<button type="submit" value="Search" class="btn btn-primary">SEARCH</button>
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
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>NAME  </th>
                        <th>SIZE</th>
                        <th>CALORIES</th>
                        <th>CARBS</th>
                        <th>FAT</th>
                        <th>PROTEIN</th>
                       </tr>
</thead>
<tbody>
    <?php 
    $con =mysqli_connect("localhost","root","","food");
    if (isset($_GET['search']))
    {
        $filtervalues=$_GET['search'];
        $query="SELECT * FROM users WHERE CONCAT(NAME,SIZE,CALORIES,CARBS,FAT,PROTEIN) LIKE '%$filtervalues%'";
        $query_run=mysqli_query($con, $query);

        if(mysqli_num_rows($query_run)>0)
{
foreach($query_run as $items)
{
    ?>
    <tr>
   <td><?= $items['NAME'];?></td>
   <td><?= $items['SIZE'];?></td>
   <td><?= $items['CALORIES'];?></td>
   <td><?= $items['CARBS'];?></td>
   <td><?= $items['FAT'];?></td>
   <td><?= $items['PROTEIN'];?></td>

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