// Copyright © 2015-2018 Anker Innovations Technology Limited All Rights Reserved.
package db

import (
	"github.com/astaxie/beego"
	"github.com/jinzhu/gorm"

	"gitsamba.anker-in.com/acc/infra/log"
)

var (
	/*
		speaker
		manu_omc
		speaker_data
	*/
	DB     *gorm.DB
)

const (
	DEFAULT_MAX_CONNECTION = 10
)

func InitDB() error {
	connectStrOmc := beego.AppConfig.String("db")
	var err error
	log.Debugf("Init DB, connectStrOmc string is: %v", connectStrOmc)
	DB, err = gorm.Open("mysql", connectStrOmc)
	if err != nil {
		log.Warnf("init db error with url %s failed: %s", connectStrOmc, err.Error())
		return err
	}
	DB.DB().SetMaxOpenConns(DEFAULT_MAX_CONNECTION)
	DB.LogMode(true)
	DB.SetLogger(log.CurrentLogger())

	return nil
}

func LogMode(enable bool) {
	if DB != nil {
		DB.LogMode(enable)
	}
}
