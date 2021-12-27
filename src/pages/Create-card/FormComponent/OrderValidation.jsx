import React from 'react';

const OrderValidation = () => {
    return (
        <section id="order_validate">
            <div class="container">
                <div class="validateInner">
                    <form action="" class="validateForm">
                        <h3 class="title">Validate your Order</h3>

                        <div>
                            <h6 class="subTitle">Delivary</h6>
                                    
                            <div class="d-flex gap-3">
                                <div class="w-100 form-floating mb-3">
                                    <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">First Name</label>
                                </div>

                                <div class="w-100 form-floating mb-3">
                                    <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Last Name</label>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Society</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Additional Address</label>
                            </div>

                            <div class="d-flex gap-3">
                                <div class="w-100 form-floating mb-3">
                                    <input type="password" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Postal code</label>
                                </div>

                                <div class="w-100 form-floating mb-3">
                                    <input type="password" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">City</label>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Country</label>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h6 class="subTitle">Delivary</h6>

                            <div className='mb-3'>
                                <input type="checkbox" className='form-check-input me-1' name="vehicle1" value="" />
                                <label for="vehicle1">My billing address is the same</label>
                            </div>
                                    
                            <div class="d-flex gap-3">
                                <div class="w-100 form-floating mb-3">
                                    <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">First Name</label>
                                </div>

                                <div class="w-100 form-floating mb-3">
                                    <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Last Name</label>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Society</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Additional Address</label>
                            </div>

                            <div class="d-flex gap-3">
                                <div class="w-100 form-floating mb-3">
                                    <input type="password" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Postal code</label>
                                </div>

                                <div class="w-100 form-floating mb-3">
                                    <input type="password" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">City</label>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Country</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Comment On this Commance</label>
                            </div>

                            <p className='mb-0 ms-3 pt-4'>Do you have a promo code?</p>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Promo Code</label>
                            </div>
                        </div>

                        <div className='validateArea'>
                            <button className='btn'>Validate Your Request</button>
                            <p className=''>Payment will be made by check or bank transfer</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default OrderValidation;