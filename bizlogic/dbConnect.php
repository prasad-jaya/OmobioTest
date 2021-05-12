<?php 
 class dbConnect {

    private $dbServer = "localhost";
    private $dbUsername = "root";
    private $dbPassword = "";
    private $dbName = "structure";
    private $conn;

  public function connect(){
      $this->conn = null;
    try {
        $this->conn = mysqli_connect($this->dbServer,$this->dbUsername,$this->dbPassword,$this->dbName);

        if ($this->conn -> connect_errno) {
            echo "Failed to connect to MySQL: " . $this->conn -> connect_error;
            exit();
          }
        
    } catch (Exception $e) {
        echo 'Heloo' .$e;
    }

    return $this->conn;

 }
}

?>