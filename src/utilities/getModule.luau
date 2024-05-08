local org = script:FindFirstAncestor("@rbxts")

function findFirstDescendantOfClass(instance, class)
	for _, v in pairs(instance:GetDescendants()) do
		if v:IsA(class) then
			return v
		end
	end

	return nil
end

return function(name)
	local instance = org:FindFirstChild(name)
	assert(instance, `Couldn't resolve dependency: {name}`)

	local module = instance:IsA("ModuleScript") and instance or findFirstDescendantOfClass(instance, "ModuleScript")
	return module
end
