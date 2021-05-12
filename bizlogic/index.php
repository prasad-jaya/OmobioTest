
<?php
    include_once 'dbConnect.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header('Content-Type: application/json');

    $database = new dbConnect();
    $conn = $database->connect();
   

    if(isset($_GET['q'])){
        $term = $_GET['q'];
        $term2 = $_GET['q2'];
        try {
            $sql = 'SELECT user_Id, name, username, email FROM db_users WHERE password="'.$term2.'" AND username="'.$term.'";';
            //print $sql;
            $result = mysqli_query($conn,$sql);
            $resultCheck = mysqli_num_rows($result);
            if($resultCheck > 0) {
                $post_arr = array();
                $post_arr['data'] = array();

                while ($row = mysqli_fetch_assoc($result)){          
                    extract($row);
                    array_push($post_arr['data'],$row);
                }
                echo json_encode($post_arr);
            }
            else{
                echo json_encode(
                    array('message'=>'NoData'));
            }

        } catch (\Throwable $th) {
                echo $th;
        }
    }

?>

