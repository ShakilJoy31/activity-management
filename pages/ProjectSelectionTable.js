import React from 'react';
import { useState } from 'react';

const ProjectSelectionTable = ({setProjectSelectionModal, setShopify, setWooCommerce, setAddProducts, setCreateWebsite, setGMBProfile, setAnalyticsSetup, setWebsiteLogo, shopify, wooCommerce, addProducts, createWebsite, GMBProfile, analyticsSetup, websiteLogo, setShopifyInput, setWooCommerceInput, setAddProductsInput, setCreateWebsiteInput, setGMBProfileInput, setAnalyticsSetupInput, setWebsiteLogoInput, setShopifyTask, setWooCommerceTask, setAddProductsTask, setCreateWebsiteTask, setGMBProfileTask, setAnalyticsSetupTask, setWebsiteLogoTask }) => {
    return (
        <div>
            <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div style={{
                        // backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                        // backgroundSize: "100%",
                        // backgroundRepeat: "repeat"
                    }} className="modal">
                        <div className="relative w-11/12 max-w-5xl modal-box">
                            <label onClick={() => setProjectSelectionModal(false)} htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <p className='flex justify-center text-xl text-orange-500'>Select Projects from below</p>

                            <p className='flex justify-center my-2 text-orange-300'>Also Assign the task and price.</p>

                            <div className="w-full overflow-x-auto">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Service</th>
                                            <th>Task</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setShopify(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>Shopify Store Setup</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setShopifyTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!shopify} /></div>
                                            </td>

                                            <td>
                                            <input onChange={(e)=>setShopifyInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!shopify} />
                                            </td>
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setWooCommerce(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>WooCommerce Store Setup</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setWooCommerceTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!wooCommerce} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setWooCommerceInput(parseInt(e.target.value))} type="text" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!wooCommerce} /></td> 
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setAddProducts(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>Add Products Details</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setAddProductsTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!addProducts} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setAddProductsInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!addProducts} /></td> 
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setCreateWebsite(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>Create Website Policy</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setCreateWebsiteTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!createWebsite} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setCreateWebsiteInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!createWebsite} /></td> 
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setGMBProfile(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>GMB Profile Setup</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setGMBProfileTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!GMBProfile} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setGMBProfileInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!GMBProfile} /></td> 
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setAnalyticsSetup(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>Analytics Setup</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setAnalyticsSetupTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!analyticsSetup} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setAnalyticsSetupInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!analyticsSetup} /></td> 
                                        </tr> 

                                        <tr>
                                            <th>
                                                <label>
                                                    <input onChange={(e)=>setWebsiteLogo(e.target.checked)} type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <p>Website Logo</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div><textarea onChange={(e)=>setWebsiteLogoTask(e.target.value)} type="text"  className="w-48 max-w-xs focus:outline-none input-error border-error input" disabled={!websiteLogo} /></div>
                                            </td>

                                            <td><input onChange={(e)=>setWebsiteLogoInput(parseInt(e.target.value))} type="number" placeholder="price" className="w-24 max-w-xs focus:outline-none input-error border-error input" disabled={!websiteLogo} /></td> 
                                        </tr> 

                                    </tbody>  

                                </table>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProjectSelectionTable;