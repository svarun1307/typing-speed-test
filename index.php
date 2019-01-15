<html>
<head>
<title>IMAGIX TYPING TEST</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/style.css" />

</head>
<body>
<br/><br/><br/>
<div class="container container-responsive contd">
	<br/><br/>
	<div class="container container-responsive">
	<div class="col-lg-5 col-md-12 col-xs-12 col-sm-12">
			<button type="button" class="btn btn-success" onclick="rel()"><i>Restart test</i></button>
	</div>
	<div class="col-lg-5 col-md-12 col-xs-12 col-sm-12 pull-right timer">
			<span>Time</span> <span>Left:</span><span CLASS="tmev">60</span>
	</div>
	</div>
	
	<br/>
	<div class="container container-responsive row">
		<div class="form-control"  id="t1" disabled >
				

		</div>
	
	</div>
	
	<br/><br/>
	<div class="container container-responsive row" >
		<span  style="letter-spacing:5px;"><i><b>Type Here:</b></i></span>
		<input type="text" class="form-control"  id="t2" />
	
	</div>
<br/>
<hr style="height:0px;border:1px solid red;"/>
<ol type="i">
	<li><b>Type words into the textbox provided above.</b></li>
	<li><b>Time limit is of 60 seconds.</b></li>
	<li><b>Press the space bar on completing of each word before typing the next word.</b></li>
	<li><b>The text entered should be case-sensitive.</b></li>

</ol>



</div>
<a  data-toggle="modal" data-target="#myModal"  id="g1" hidden  data-backdrop="static" ></a> 
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            
            <center><h4 class="modal-title mod" id="myModalLabel">
				Your Typing Test Results:
            </h4></center>
         </div>
         <div class="modal-body mod">
           <center class="mod">
		   <!--<div>TOTAL NUMBER OF WORDS TO TYPE:<span class="nofwrds0"></span></div>-->
			<br/>
			<div>TOTAL CORRECT WORDS:<span class="nofwrds1"></span></div>
			<br/>
			<div>TOTAL INCORRECT WORDS :<span class="nofwrds2"></span></div>
			<br/>
			<div>WORDS PER MINUTE (WPM) :<span class="nofwrds3"></span></div>
			<br/>
			<div>ACCURACY :<span class="nofwrds4"></span>%</div>
			<br/>
			</center> 
		</div>
         <div class="modal-footer">
			 <button type="button" class="btn btn-success" onclick="rel()" >RETRY TEST
            </button>
             <button type="button" class="btn btn-primary" id="closem" data-dismiss="modal" style="display:none" >
            </button>
			
			
         </div>
      </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<script type="text/javascript" src="js/jquery.js" type="text/javascript"></script>
<script type="text/javascript" src="js/bootstrap.js" type="text/javascript"></script>
<script type="text/javascript" src="js/index.js" ></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130546438-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-130546438-1');
</script>
</body>
</html>