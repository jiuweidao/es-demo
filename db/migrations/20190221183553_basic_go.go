
package main

import (
	"database/sql"
	"fmt"
)

// Up is executed when this migration is applied
func Up_20190221183553(txn *sql.Tx) {

	fmt.Println("Up Out ...")
}

// Down is executed when this migration is rolled back
func Down_20190221183553(txn *sql.Tx) {
	fmt.Println("Down Out ...")
}
