<?php

// SQLite only — no external database server. The database is a self-contained file
// under runtime/, created on first migrate.
return [
    'class' => \yii\db\Connection::class,
    'dsn' => 'mysql:host=mysql.nstrim.app;port=3306;dbname=ws26_skill17_sharpotter',
    'username' => 'sharp_otter',
    'password' => 'KPDwlFXM0mAKasS3',
    'charset' => 'utf8',
];
