<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="<?= base_url('/style.css'); ?>">
</head>
<?= $this->include('template/admin_header'); ?>

<body>
    <div class="add">
        <h2><?= $title; ?></h2>
        <form action="" method="post">
            <p>
                <input type="text" name="judul" value="<?= $data['judul']; ?>">
            </p>
            <p>
                <textarea name="isi" cols="50" rows="10"><?= $data['isi']; ?></textarea>
            </p>
            <p><input type="submit" value="Kirim" class="btn btn-large"></p>
        </form>


    </div>
</body>
<?= $this->include('template/admin_footer'); ?>

</html>