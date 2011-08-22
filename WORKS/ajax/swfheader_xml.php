<?php 
header("Content-type: text/xml");
require ("swfheader.class.php") ;
// Create a new SWF header object with debug info, open with
// disabled debug (false) for silent processing
$swf = new swfheader(false) ;
// Open the swf file...
// Replace filename accordingly to your test environment...
$swf->loadswf("$_GET[swf]") ;
// Show data as a block... you can also access data within the object
//$swf->show() ;
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<swfs>
	<swf width=\"$swf->width\" height=\"$swf->height\" />
</swfs>";
?>
