<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="<?= base_url('/style.css'); ?>">
</head>

<body class="log">
    <div class="container-login">
        <h4>Sign In</h4>
        <?php if (session()->getFlashdata('flash_msg')) : ?>
            <div class="alert alert-danger"><?= session()->getFlashdata('flash_msg') ?></div>
        <?php endif; ?>
        <form action="" method="post">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" name="email" class="email" id="email" autocomplete="disable" value="<?= set_value('email') ?>">
            <br>
            <label for="password" class="form-labl">Password</label>
            <input type="password" name="password" class="password" id="password">
            <button type="submit" class="button">Login</button>
        </form>
    </div>
    <script src="/public/main.js"></script>
</body>

</html>