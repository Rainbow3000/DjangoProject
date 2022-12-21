$(document).ready(function () {
  $(".cart-des").click(function (e) {
    e.preventDefault();

    var cartQty = $(this).closest(".cart-container").find(".cart_qty").val();

    if (parseInt(cartQty) > 1) {
      var cartId = $(this).closest(".cart-container").find(".cart_id").val();
      var token = $("input[name=csrfmiddlewaretoken]").val();
      let desNum = parseInt(cartQty) - 1;
      $.ajax({
        method: "POST",
        url: "http://localhost:8888/updatecart",
        data: {
          cartQty: desNum,
          cartId: cartId,
          csrfmiddlewaretoken: token,
        },
        success: function (response) {
          window.location = "http://localhost:8888/viewcart";
        },
      });
    }
  });

  $(".cart-inc").click(function (e) {
    e.preventDefault();

    var cartQty = $(this).closest(".cart-container").find(".cart_qty").val();
    let incNum = parseInt(cartQty) + 1;
    var cartId = $(this).closest(".cart-container").find(".cart_id").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "http://localhost:8888/updatecart",
      data: {
        cartQty: incNum,
        cartId: cartId,
        csrfmiddlewaretoken: token,
      },
      success: function (response) {
        alertify.success(response.status);
        window.location = "http://localhost:8888/viewcart";
      },
    });
  });

  $(".del-btn").click(function (e) {
    e.preventDefault();

    var cartId = $(this).closest(".cart-container").find(".cart_id").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "http://localhost:8888/deletecart",
      data: {
        cartId: cartId,
        csrfmiddlewaretoken: token,
      },
      success: function (response) {
        window.location = "http://localhost:8888/viewcart";
      },
    });
  });

  $(".addToCartBtn").click(function (e) {
    e.preventDefault();
    var product_id = $(this).closest(".details-product").find(".prod_id").val();
    var product_qty = $(this)
      .closest(".details-product")
      .find(".prod_qty")
      .text();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "http://localhost:8888/addcart",
      data: {
        product_id: product_id,
        product_qty: product_qty,
        csrfmiddlewaretoken: token,
      },
      success: function (response) {
        alertify.success(response.status);
      },
    });
  });

  $(".order-btn").click(function (e) {
    e.preventDefault();
    var username = $(this).closest(".payment-page").find(".user-name").val();
    var userphone = $(this).closest(".payment-page").find(".user-phone").val();
    var useraddress = $(this).closest(".payment-page").find(".user-address").val();
    var totalprice = $(this).closest(".payment-page").find(".total-price-cart").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "http://localhost:8888/checkoutimplement",
      data: {
        username: username,
        userphone: userphone,
        useraddress:useraddress,
        totalprice:totalprice,
        csrfmiddlewaretoken: token,
      },
      success: function (response) {
        window.location = "http://localhost:8888/success";
      },
    });
  });
});
